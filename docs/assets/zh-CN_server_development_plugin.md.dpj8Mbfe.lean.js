import{_ as a,E as t,c as n,J as l,V as s,o as e}from"./chunks/framework.fogKwqBf.js";const m=JSON.parse('{"title":"自定义插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/development/plugin.md","filePath":"zh-CN/server/development/plugin.md"}'),p={name:"zh-CN/server/development/plugin.md"},h=s("",8),d=s("",44);function r(k,E,o,c,g,u){const i=t("mermaid");return e(),n("div",null,[h,l(i,{dsl:`stateDiagram-v2
	[*] --> Loaded: Load
	state start_if_succeed <<choice>>
	state resume_if_succeed <<choice>>

	Loaded --> start_if_succeed: Start
	start_if_succeed --> Started: If succeed
	start_if_succeed --> Loaded: If fail<br>(Throw or Time out)
	Loaded --> Stopped: Stop
	Started --> Paused: Pause
	Paused --> resume_if_succeed: Resume
	resume_if_succeed --> Started: If succeed
	resume_if_succeed --> Paused: If fail<br>(Throw or Time out)
	Started --> Stopped: Stop
	Paused --> Stopped: Stop

	Stopped --> [*]`}),d])}const b=a(p,[["render",r]]);export{m as __pageData,b as default};
