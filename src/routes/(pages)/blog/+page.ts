import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });

    const posts = [];

    for (const path in modules) {
        const file = modules[path] as any;
        const slug = path.split('/').pop()?.replace('.md', '');

        if (file && file.metadata && slug) {
            posts.push({
                slug,
                title: file.metadata.title,
                description: file.metadata.description,
                date: file.metadata.date,
                published: file.metadata.published
            });
        }
    }

    const publishedPosts = posts
        .filter((post) => post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        posts: publishedPosts
    };
}