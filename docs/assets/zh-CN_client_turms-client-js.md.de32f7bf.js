import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0882ee08.js";const h=JSON.parse('{"title":"turms-client-js共享上下文","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/client/turms-client-js.md","filePath":"zh-CN/client/turms-client-js.md"}'),l={name:"zh-CN/client/turms-client-js.md"},p=e(`<h1 id="turms-client-js共享上下文" tabindex="-1">turms-client-js共享上下文 <a class="header-anchor" href="#turms-client-js共享上下文" aria-label="Permalink to &quot;turms-client-js共享上下文&quot;">​</a></h1><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>由于Turms服务端不支持也没计划支持：一个用户在同一个端同时建立多个会话。因此如果一个用户在浏览器打开多个标签页，并试图以<strong>相同的用户ID与设备类型</strong>进行登陆时，那么有且仅有一个会话可以建立成功。从浏览器角度来看，就是有且仅有一个标签页能够登陆成功。该场景适用于一般的社交应用。</p><h2 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h2><p>但部分IM场景需要支持：从用户角度来看，用户只需在一个页面登陆一次，那么其他标签页也就处于已登陆状态了，在所有标签页里的Turms客户端都能以相同的用户身份，发送请求、接收消息与通知。适用于客服系统等场景。</p><p>为了支持上述场景，需要使用<code>共享上下文</code>。具体而言，对于在不同标签页的同域（同协议；同域名；同端口）、同用户ID且同设备类型的Turms客户端，它们可以共享与Turms服务端的WebSocket连接与一些已登陆用户的信息。</p><p>提醒：因为只有同域名、同用户ID且同设备类型的Turms客户端才共享上下文，因此您的客户端可以以不同的用户身份登陆不同的标签页，以支持类似“部分标签页共享A用户的会话，部分标签页共享B用户的会话”的特性。</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><p>turms-client-js默认不开启共享上下文功能，而如果您的应用需要使用该功能，可以通过在创建<code>TurmsClient</code>实例时，传递一个<code>useSharedContext: true</code>开启。具体代码如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TurmsClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    useSharedContext: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> client </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TurmsClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    useSharedContext: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>如果<code>useSharedContext</code>为<code>true</code>，但用户的浏览器并不支持<code>Shared Web Workers</code>，则<code>new TurmsClient()</code>会直接抛错误。</p><p>如果您想要提前知道当前浏览器是否支持共享上下文，您可以调用：<code>TurmsClient.isSharedContextSupported()</code>，该方法返回一个<code>boolean</code>值，<code>true</code>即支持，<code>false</code>即不支持。</p><p>注意事项：</p><ul><li>如果开启<code>共享上下文</code>功能，那么您将不再能自行直接调用<code>client.driver.connectionService#connect</code>方法（通常情况下，用户也不需要直接调用该底层方法）。除此之外，您无需为适配共享上下文功能修改其他逻辑代码。</li></ul><h2 id="支持的浏览器版本" tabindex="-1">支持的浏览器版本 <a class="header-anchor" href="#支持的浏览器版本" aria-label="Permalink to &quot;支持的浏览器版本&quot;">​</a></h2><p>由于turms-client-js采用<code>Shared Web Workers</code>实现共享上下文，因此版本要求同<a href="https://caniuse.com/sharedworkers" target="_blank" rel="noreferrer">Shared Web Workers</a>。</p><h2 id="具体代码示例" tabindex="-1">具体代码示例 <a class="header-anchor" href="#具体代码示例" aria-label="Permalink to &quot;具体代码示例&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// On the first tab of the same origin</span></span>
<span class="line"><span style="color:#6A737D;">// The client will create a new WebSocket connection</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TurmsClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    useSharedContext: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">client.userService.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    userId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    password: </span><span style="color:#9ECBFF;">&quot;123&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    deviceType: DeviceType.</span><span style="color:#79B8FF;">BROWSER</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// On the second tab of the same origin</span></span>
<span class="line"><span style="color:#6A737D;">// The client will share the WebSocket connection with the first tab</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TurmsClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    useSharedContext: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">client.userService.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    userId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    password: </span><span style="color:#9ECBFF;">&quot;123&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    deviceType: DeviceType.</span><span style="color:#79B8FF;">BROWSER</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// On the third tab of the same origin</span></span>
<span class="line"><span style="color:#6A737D;">// The client will create a new WebSocket connection because it uses a new device type</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TurmsClient</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    useSharedContext: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">client.userService.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    userId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    password: </span><span style="color:#9ECBFF;">&quot;123&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    deviceType: DeviceType.</span><span style="color:#79B8FF;">ANDROID</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// On the first tab of the same origin</span></span>
<span class="line"><span style="color:#6A737D;">// The client will create a new WebSocket connection</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> client </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TurmsClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    useSharedContext: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">client.userService.</span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    userId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    password: </span><span style="color:#032F62;">&quot;123&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    deviceType: DeviceType.</span><span style="color:#005CC5;">BROWSER</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// On the second tab of the same origin</span></span>
<span class="line"><span style="color:#6A737D;">// The client will share the WebSocket connection with the first tab</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> client </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TurmsClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    useSharedContext: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">client.userService.</span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    userId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    password: </span><span style="color:#032F62;">&quot;123&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    deviceType: DeviceType.</span><span style="color:#005CC5;">BROWSER</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// On the third tab of the same origin</span></span>
<span class="line"><span style="color:#6A737D;">// The client will create a new WebSocket connection because it uses a new device type</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> client </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TurmsClient</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    useSharedContext: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">client.userService.</span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    userId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    password: </span><span style="color:#032F62;">&quot;123&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    deviceType: DeviceType.</span><span style="color:#005CC5;">ANDROID</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,18),o=[p];function t(c,r,i,E,y,d){return n(),a("div",null,o)}const C=s(l,[["render",t]]);export{h as __pageData,C as default};
