declare module 'virtual:starlight-blog-config' {
  const StarlightBlogConfig: import('./libs/config').StarlightBlogConfig

  export default StarlightBlogConfig
}

declare module 'virtual:starlight-blog-context' {
  const StarlightBlogContext: import('./libs/vite').StarlightBlogContext

  export default StarlightBlogContext
}

declare module 'virtual:starlight-blog-images' {
  type ImageMetadata = import('astro').ImageMetadata

  export const authors: Record<string, string | ImageMetadata>
}

declare module 'virtual:starlight-blog-components' {
  export const Author: typeof import('./components/Author.astro').default
  export const Cover: typeof import('./components/Cover.astro').default
  export const Excerpt: typeof import('./components/Excerpt.astro').default
  export const ExcerptContent: typeof import('./components/ExcerptContent.astro').default
  export const Metadata: typeof import('./components/Metadata.astro').default
  export const Page: typeof import('./components/Page.astro').default
  export const PostCount: typeof import('./components/PostCount.astro').default
  export const PostTags: typeof import('./components/PostTags.astro').default
  export const Posts: typeof import('./components/Posts.astro').default
  export const Preview: typeof import('./components/Preview.astro').default
  export const PrevNextLinks: typeof import('./components/PrevNextLinks.astro').default
}
