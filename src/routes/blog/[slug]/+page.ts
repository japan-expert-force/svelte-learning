import type { Load } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
    let post;
    try {
        post = await import(/* @vite-ignore */ `../../../contents/blog/${params.slug}/index.md`);
    } catch {
        throw error(404, 'Not found');
    }
    const { title, date, tags } = post.metadata;
    const content = post.default;
    return { slug: params.slug, title, date, tags, content };
};
