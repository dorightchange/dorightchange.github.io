import{_ as e,V as n,W as i,$ as d}from"./framework-7d4a7b4b.js";const s={},a=d(`<h2 id="插件简介" tabindex="-1"><a class="header-anchor" href="#插件简介" aria-hidden="true">#</a> 插件简介</h2><p>vuepress-theme-hope 内置了 vuepress-plugin-copy-code2，提供了一个复制按钮。</p><h2 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法" aria-hidden="true">#</a> 配置方法</h2><blockquote><p>直接在 <code>theme.ts</code> 文件中的<code>plugins</code>中添加<code>copyCode:{}</code>即可</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default hopeTheme({
  locales: {
  },

  //插件
  plugins: {
    blog: true,
    copyCode: {
      duration: 800,
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[a];function c(r,o){return n(),i("div",null,l)}const u=e(s,[["render",c],["__file","一键复制代码.html.vue"]]);export{u as default};
