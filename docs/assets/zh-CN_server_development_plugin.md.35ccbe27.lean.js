import{_ as n,C as l,o as p,c as o,H as e,Q as s}from"./chunks/framework.0882ee08.js";const v=JSON.parse('{"title":"自定义插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/development/plugin.md","filePath":"zh-CN/server/development/plugin.md"}'),t={name:"zh-CN/server/development/plugin.md"},r=s("",8),c=s("",44);function i(E,y,d,u,g,m){const a=l("mermaid");return p(),o("div",null,[r,e(a,{dsl:`stateDiagram-v2
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

	Stopped --> [*]`}),c])}const b=n(t,[["render",i]]);export{v as __pageData,b as default};
