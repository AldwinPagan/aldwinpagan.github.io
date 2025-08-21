import { Plugin, LoadContext } from "@docusaurus/types";
    export default function tailwindPlugin(context: LoadContext, options): Plugin {
  return {
    name: 'tailwind-plugin',
    
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [require('@tailwindcss/postcss')]
      return postcssOptions
    }
  }
}
