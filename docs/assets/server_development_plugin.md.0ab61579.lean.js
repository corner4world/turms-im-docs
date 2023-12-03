import{_ as n,C as a,o as t,c as l,H as o,Q as s}from"./chunks/framework.0882ee08.js";const f=JSON.parse('{"title":"Custom Plugins","description":"","frontmatter":{},"headers":[],"relativePath":"server/development/plugin.md","filePath":"server/development/plugin.md"}'),p={name:"server/development/plugin.md"},r=s("",8),i=s("",45);function c(d,y,u,E,h,g){const e=a("mermaid");return t(),l("div",null,[r,o(e,{dsl:`stateDiagram-v2
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

	Stopped --> [*]`}),i])}const v=n(p,[["render",c]]);export{f as __pageData,v as default};
