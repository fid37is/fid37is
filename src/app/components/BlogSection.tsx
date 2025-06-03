/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, RefreshCw } from 'lucide-react';
import { fetchMediumPosts } from '../utils/fetchMediumPosts';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    image: string | null;
    url: string;
    author: string;
}

interface MediumItem {
    title?: string;
    contentSnippet?: string;
    content?: string;
    contentEncoded?: string;
    description?: string;
    pubDate?: string;
    categories?: string[];
    link?: string;
    creator?: string;
    author?: string;
    enclosure?: {
        url?: string;
    };
    'media:thumbnail'?: {
        $?: {
            url?: string;
        };
    };
    mediaThumbnail?: {
        $?: {
            url?: string;
        };
    };
    thumbnail?: string;
}

export const BlogSection: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const mediumUsername = 'mistarfid';

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);

            try {
                const items: MediumItem[] = await fetchMediumPosts(mediumUsername);

                const posts: BlogPost[] = items.map((item) => {
                    // Try to get the full content from Medium RSS
                    // Medium RSS feeds typically have full content in 'content:encoded' field
                    const rawContent = item.contentEncoded || item.content || item.contentSnippet || item.description || '';
                    
                    // Strip HTML tags and clean up the content
                    const stripHtml = (html: string) => {
                        return html
                            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
                            .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '') // Remove style tags
                            .replace(/<[^>]*>/g, '') // Remove HTML tags
                            .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
                            .replace(/&amp;/g, '&')  // Replace &amp; with &
                            .replace(/&lt;/g, '<')   // Replace &lt; with <
                            .replace(/&gt;/g, '>')   // Replace &gt; with >
                            .replace(/&quot;/g, '"') // Replace &quot; with "
                            .replace(/&#x27;/g, "'") // Replace &#x27; with '
                            .replace(/&#39;/g, "'")  // Replace &#39; with '
                            .replace(/\s+/g, ' ')    // Replace multiple spaces with single space
                            .trim();
                    };
                    
                    const cleanContent = stripHtml(rawContent);
                    
                    // Extract image URL from various possible sources
                    const getImageUrl = (item: MediumItem) => {
                        // Try different image sources that Medium might use
                        if (item.enclosure?.url) return item.enclosure.url;
                        if (item['media:thumbnail']?.$?.url) return item['media:thumbnail'].$.url;
                        if (item.mediaThumbnail?.$?.url) return item.mediaThumbnail.$.url;
                        if (item.thumbnail) return item.thumbnail;
                        
                        // Try to extract image from content HTML - look for the first meaningful image
                        const imgMatches = rawContent.match(/<img[^>]+src="([^">]+)"/g);
                        if (imgMatches) {
                            for (const match of imgMatches) {
                                const srcMatch = match.match(/src="([^">]+)"/);
                                if (srcMatch && srcMatch[1]) {
                                    const url = srcMatch[1];
                                    // Skip small icons, logos, and tracking pixels
                                    if (!url.includes('1*1') && 
                                        !url.includes('tracking') && 
                                        !url.includes('pixel') &&
                                        !url.includes('logo') &&
                                        !url.includes('icon') &&
                                        (url.includes('miro.medium.com') || 
                                         url.includes('cdn-images') || 
                                         url.includes('unsplash') ||
                                         url.includes('jpeg') ||
                                         url.includes('jpg') ||
                                         url.includes('png'))) {
                                        return url;
                                    }
                                }
                            }
                        }
                        
                        return null;
                    };
                    
                    const imageUrl = getImageUrl(item);
                    
                    // Calculate read time based on word count (average reading speed: 200 words per minute)
                    const wordCount = cleanContent.split(/\s+/).filter(word => word.length > 0).length;
                    const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));
                    
                    // Debug log to see what we're getting
                    console.log('RSS Item Processing:', {
                        title: item.title,
                        contentLength: rawContent.length,
                        cleanContentLength: cleanContent.length,
                        wordCount: wordCount,
                        readTime: readTimeMinutes,
                        hasContentEncoded: !!item.contentEncoded,
                        hasContent: !!item.content,
                        hasContentSnippet: !!item.contentSnippet,
                        imageUrl: imageUrl,
                        excerpt: cleanContent.substring(0, 100) + '...'
                    });
                    
                    return {
                        title: item.title || 'Untitled',
                        excerpt: cleanContent ? cleanContent.substring(0, 200) + (cleanContent.length > 200 ? '...' : '') : 'No excerpt available',
                        date: new Date(item.pubDate || Date.now()).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }),
                        readTime: `${readTimeMinutes} min read`,
                        category: item.categories?.[0] || 'Article',
                        tags: item.categories || ['Medium'],
                        image: imageUrl || null,
                        url: item.link || '#',
                        author: item.creator || item.author || 'Author'
                    };
                });

                setBlogPosts(posts);
            } catch (error) {
                console.error('Failed to fetch Medium posts:', error);
                setBlogPosts([]);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, [mediumUsername]);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Insights & Articles
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Sharing knowledge and experiences from the intersection of design, development, and quality assurance
                    </p>
                </div>

                {loading && (
                    <div className="text-center py-12">
                        <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
                        <p className="text-gray-600">Loading latest articles from Medium...</p>
                    </div>
                )}

                {!loading && blogPosts.length > 0 && (
                    <div className={`grid gap-8 ${blogPosts.length === 1
                        ? 'max-w-md mx-auto'
                        : blogPosts.length === 2
                            ? 'md:grid-cols-2 max-w-4xl mx-auto'
                            : 'md:grid-cols-2 lg:grid-cols-3'
                        }`}>
                        {blogPosts.map((post, index) => (
                            <article key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        {post.image ? (
                                            <img 
                                                src={post.image} 
                                                alt={post.title}
                                                className="w-12 h-12 rounded-lg object-cover"
                                                onError={(e) => {
                                                    // Hide image if it fails to load
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                                                <span className="text-gray-400 text-xs">IMG</span>
                                            </div>
                                        )}
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.tags.slice(0, 3).map((tag: string, i: number) => (
                                            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                    >
                                        <span>Read on Medium</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {!loading && blogPosts.length === 0 && (
                    <div className="text-center py-12">
                        <div className="max-w-md mx-auto">
                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                                <div className="p-8">
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <span className="text-gray-400 text-sm">No Posts</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                                        No Posts Yet
                                    </h3>
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        Articles will appear here once they&apos;re published on Medium.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="text-center mt-12">
                    <a
                        href={`https://medium.com/@${mediumUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-300 inline-block"
                    >
                        View All Articles on Medium
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;