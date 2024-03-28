import { DefaultTheme, defineConfig } from 'vitepress'

function sidebarShell(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: '介绍', link: '/shell/index' },
        { text: '01- Shell脚本学习-入门', link: '/shell/chapter1' },
        { text: '02- Shell脚本学习-运算符', link: '/shell/chapter2' },
        { text: '03- Shell脚本学习-字符串和数组', link: '/shell/chapter3' },
        { text: '04- Shell脚本学习-条件控制', link: '/shell/chapter4' },
        { text: '05- Shell脚本学习-函数', link: '/shell/chapter5' },
        { text: '06- Shell脚本学习-其它', link: '/shell/chapter6' }
      ]
    }
  ]
}

const sidebarGit = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      items: [
        { text: '介绍', link: '/git/index' },
        { text: '常用 Git 命令清单', link: '/git/chapter1' },
      ]
    }
  ]
}

const sidebarMarkdown = ():DefaultTheme.SidebarItem[]=>{
  return [
    {
      items: [
        { text: '介绍', link: '/markdown/index' },
        { text: 'Markdown 语法', link: '/markdown/chapter1' },
      ]
    }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "魔王の个人学习文档站",
  description: "记录，学习，体验生活",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Shell', link: '/shell/index' },
      { text: '工具类', 
        items:[
          { text: 'Git', link: '/git/index' },
          { text: 'Markdown', link: '/markdown/index' }
        ]
      }
    ],

    // { text: '工具类', link: '/git/index' }
    sidebar: {
      '/shell': {
        base: '',
        items: sidebarShell()
      },
      '/git': {
        base: '',
        items: sidebarGit()
      },
      '/markdown':{
        base: '',
        items: sidebarMarkdown()
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/itmowang' }
    ],

  },
  outDir: './docs'

})
