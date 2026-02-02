import { describe, expect, test } from 'vitest'

import { validateConfig } from '../../../libs/config'
import { vitePluginStarlightBlogConfig } from '../../../libs/vite'

describe('vitePluginStarlightBlogConfig', () => {
  test('generates virtual:starlight-blog-components with overrides', () => {
    const config = validateConfig({
      components: {
        Author: '/path/to/custom/Author.astro',
      },
    })

    const context = {
      description: 'Test',
      rootDir: '/root',
      site: 'https://example.com',
      srcDir: '/root/src',
      title: 'Test',
      titleDelimiter: '-',
      trailingSlash: 'ignore' as const,
    }

    const plugin = vitePluginStarlightBlogConfig(config, context)
    // @ts-expect-error - load is present on the plugin
    const load = plugin.load

    // Check if resolveId handles it
    // @ts-expect-error - resolveId is present on the plugin
    const resolveId = plugin.resolveId
    expect(resolveId('virtual:starlight-blog-components')).toBe('\0virtual:starlight-blog-components')

    const code = load('\0virtual:starlight-blog-components')

    expect(code).toContain('export { default as Author } from "/path/to/custom/Author.astro";')
    expect(code).toContain('export { default as Cover } from "starlight-blog/components/Cover.astro";')
  })
})
