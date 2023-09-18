import{_ as t,V as d,W as e,$ as r}from"./framework-7d4a7b4b.js";const a="/assets/vim/vim.png",i={},n=r('<h2 id="一、关于文件" tabindex="-1"><a class="header-anchor" href="#一、关于文件" aria-hidden="true">#</a> 一、关于文件</h2><h3 id="_1-1帮助指令" tabindex="-1"><a class="header-anchor" href="#_1-1帮助指令" aria-hidden="true">#</a> 1.1帮助指令</h3><table><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td>ls -a</td><td>显示所有文件（包括隐藏的文件，即以“.”开头的文件）</td></tr><tr><td>ls -l</td><td>以单列输出所有文件</td></tr><tr><td>ls -al</td><td>以单列形式显示所有文件（含隐藏）</td></tr><tr><td>ls -lh</td><td>以单列形式显示文件，并将文件大小按照Mb,k的形式展示</td></tr><tr><td>ls -a /home</td><td>展示home目录下所有文件（含隐藏）</td></tr></tbody></table><h3 id="_1-2主要指令" tabindex="-1"><a class="header-anchor" href="#_1-2主要指令" aria-hidden="true">#</a> 1.2主要指令</h3><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>pwd</td><td>获取当前工作目录的绝对路径</td></tr><tr><td>ls</td><td>显示当前目录下的文件</td></tr><tr><td>cd ~</td><td>回到当前用户的家目录</td></tr><tr><td>cd ..</td><td>回到上一级目录</td></tr><tr><td>mkdir /home/dog</td><td>创建单级目录</td></tr><tr><td>mkdir -p /home/dog/tiger</td><td>创建多级目录</td></tr><tr><td>rmdir /home/dog</td><td>删除空目录</td></tr><tr><td>rm -rf /home/animals</td><td>删除非空目录【强制删除】</td></tr><tr><td>touch hello.txt</td><td>创建一个空文件</td></tr><tr><td>cp hello.txt /home/bbb</td><td>将hello.txt拷贝到/home/bbb目录下</td></tr><tr><td>cp -r /home/bbb /opt</td><td>递归地复制整个文件夹，将/home/bbb目录下所有的文件复制到/opt目录</td></tr><tr><td>\\cp -r /home/bbb /opt</td><td>强制覆盖不提醒</td></tr><tr><td>rm -r 文件夹</td><td>递归删除整个文件夹</td></tr><tr><td>rm -rf 文件夹</td><td>递归且不提醒删除文件夹</td></tr><tr><td>mv oldName newName</td><td>重命名</td></tr><tr><td>mv 文件1 /opt</td><td>移动文件</td></tr><tr><td>mv pig.txt /root/cat.txt</td><td>移动并重命名</td></tr><tr><td>mv aaa /home/AAA</td><td>移动整个目录到/home并重命名为AAA</td></tr><tr><td>cat -n /etc/profile</td><td>浏览文件【不能修改】-n带行号</td></tr><tr><td>cat -n /etc/profile | more</td><td>可用more指令进行交互</td></tr><tr><td>more +文件名</td><td>对指定文件进行交互式阅读</td></tr></tbody></table><h3 id="_1-3搜索类指令" tabindex="-1"><a class="header-anchor" href="#_1-3搜索类指令" aria-hidden="true">#</a> 1.3搜索类指令</h3><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>find /home -name helllo.txt</td><td>在home下查找文件</td></tr><tr><td>find /opt -user nobody</td><td>按用户查找</td></tr><tr><td>find / -size +200M</td><td>在根目录下查找大小大于200M的文件</td></tr><tr><td>locate filename</td><td>快速定位文件路径，第一次使用前需要updatedb</td></tr><tr><td>which ls</td><td>查找ls命令的路径</td></tr><tr><td>cat /home/hello.txt | grep -n &quot;hello&quot;</td><td>在指定文件中查找关键字hello，并返回所在行</td></tr><tr><td>cat /home/hello.txt | grep -in &quot;hello&quot;</td><td>在指定文件中查找关键字hello【忽略大小写】，并返回所在行</td></tr></tbody></table><h2 id="二、关于-vim-编辑器" tabindex="-1"><a class="header-anchor" href="#二、关于-vim-编辑器" aria-hidden="true">#</a> 二、关于 vim 编辑器</h2><h3 id="_2-1命令图示" tabindex="-1"><a class="header-anchor" href="#_2-1命令图示" aria-hidden="true">#</a> 2.1命令图示</h3><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-2指令切换" tabindex="-1"><a class="header-anchor" href="#_2-2指令切换" aria-hidden="true">#</a> 2.2指令切换</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 编辑bashrc这个文件，有两种写法
1.	vim /etc/bashrc
2.	vi /etc/bashrc

//切换指令：
1.	:		[进入命令模式]
2.	ESC		[退出当前模式]
3.	wq		[保存并退出，需在命令模式下执行]
4.	q!		[不保存并强制退出，需在命令模式下执行]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3常用指令" tabindex="-1"><a class="header-anchor" href="#_2-3常用指令" aria-hidden="true">#</a> 2.3常用指令</h3><table><thead><tr><th>使用时所处的模式</th><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>编辑模式</td><td>yy、5yy</td><td>拷贝光标所在的行、拷贝当前行向下的5行；</td></tr><tr><td>编辑模式</td><td>dd\\5dd</td><td>删除光标所在的行、删除当前行向下的5行；</td></tr><tr><td>编辑模式</td><td>p</td><td>粘贴</td></tr><tr><td>编辑模式</td><td>u</td><td>撤销</td></tr><tr><td>命令模式</td><td>关键字</td><td>查找某个关键字；按n可定位到下一个</td></tr><tr><td>命令模式</td><td>set nu</td><td>给文件设置行号</td></tr><tr><td>命令模式</td><td>set nonu</td><td>取消行号</td></tr><tr><td>命令模式</td><td>gg</td><td>快速定位到首位</td></tr><tr><td>命令模式</td><td>G</td><td>快速定位到末尾</td></tr><tr><td>命令模式</td><td>20 shift+g</td><td>快速定位到某一行</td></tr><tr><td>命令模式</td><td>：wq</td><td>保存并退出</td></tr><tr><td>命令模式</td><td>：q</td><td>不保存并退出</td></tr><tr><td>命令模式</td><td>：q！</td><td>强制退出</td></tr></tbody></table><h2 id="三、关于用户" tabindex="-1"><a class="header-anchor" href="#三、关于用户" aria-hidden="true">#</a> 三、关于用户</h2><h3 id="_3-1查看当前用户状态" tabindex="-1"><a class="header-anchor" href="#_3-1查看当前用户状态" aria-hidden="true">#</a> 3.1查看当前用户状态</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//显示用户名、ip地址、登陆时间
who am i
//只显示用户名
whoami
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2添加用户" tabindex="-1"><a class="header-anchor" href="#_3-2添加用户" aria-hidden="true">#</a> 3.2添加用户</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.以管理员身份切换到home目录下
cd /home
2.添加一个名为jack的用户，其家目录默认会被设置为/home/jack
useradd jack

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3删除用户" tabindex="-1"><a class="header-anchor" href="#_3-3删除用户" aria-hidden="true">#</a> 3.3删除用户</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 1.以管理员身份切换到home目录下
cd /home
# 2.删除jack用户的数据，并将其家目录也一并删除
userdel -r jack

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),h=[n];function l(s,c){return d(),e("div",null,h)}const m=t(i,[["render",l],["__file","Linux常用指令.html.vue"]]);export{m as default};
