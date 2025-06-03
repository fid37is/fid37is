import Parser from 'rss-parser';

const parser = new Parser({
    customFields: {
        item: [
            ['content:encoded', 'contentEncoded'],
            ['media:content', 'mediaContent'],
            ['media:thumbnail', 'mediaThumbnail']
        ]
    }
});

export const fetchMediumPosts = async (username) => {
    const CORS_PROXY = 'https://api.allorigins.win/get?url=';
    const rssUrl = encodeURIComponent(`https://medium.com/feed/@${username}`);
    const url = `${CORS_PROXY}${rssUrl}&disableCache=true`;

    try {
        const response = await fetch(url);
        const raw = await response.json();

        if (!raw?.contents) return [];

        const feed = await parser.parseString(raw.contents);
        
        // Log the raw feed item to debug
        if (feed.items.length > 0) {
            console.log('Sample RSS item structure:', {
                title: feed.items[0].title,
                hasContentEncoded: !!feed.items[0].contentEncoded,
                hasContent: !!feed.items[0].content,
                hasContentSnippet: !!feed.items[0].contentSnippet,
                keys: Object.keys(feed.items[0])
            });
        }
        
        return feed.items.slice(0, 6);
    } catch (error) {
        console.error('Error fetching Medium RSS feed:', error);
        return [];
    }
};