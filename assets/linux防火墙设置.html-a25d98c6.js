import{_ as e,V as d,W as t,$ as i}from"./framework-7d4a7b4b.js";const r={},l=i(`<h2 id="_1-firewall指令" tabindex="-1"><a class="header-anchor" href="#_1-firewall指令" aria-hidden="true">#</a> 1.firewall指令</h2><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>firewall-cmd --permanent --add-port=端口号/协议</td><td>打开端口</td></tr><tr><td>firewall-cmd --permanent --remove-port=端口号/协议</td><td>关闭端口</td></tr><tr><td>firewall-cmd --reload</td><td>重新载入</td></tr><tr><td>firewall-cmd --query-port=端口号/协议</td><td>查询端口是否开放</td></tr></tbody></table><h2 id="_2-步骤" tabindex="-1"><a class="header-anchor" href="#_2-步骤" aria-hidden="true">#</a> 2.步骤</h2><blockquote><ol><li>检查端口情况（tcp和udp）</li><li>打开/关闭端口</li><li>重载生效</li></ol></blockquote><h2 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例" aria-hidden="true">#</a> 3.示例</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**查看端口状态
[root@npu1 ~]# firewall-cmd --query-port=111/tcp
no
**开启端口
[root@npu1 ~]# firewall-cmd --permanent --add-port=111/tcp
success
**重新载入
[root@npu1 ~]# firewall-cmd --reload
success
**再次查看端口状态
[root@npu1 ~]# firewall-cmd --query-port=111/tcp
yes

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function n(s,c){return d(),t("div",null,a)}const u=e(r,[["render",n],["__file","linux防火墙设置.html.vue"]]);export{u as default};
