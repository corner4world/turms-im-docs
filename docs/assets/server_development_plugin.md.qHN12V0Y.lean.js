import{_ as e,E as t,c as a,J as n,V as s,o as l}from"./chunks/framework.fogKwqBf.js";const m=JSON.parse('{"title":"Custom Plugins","description":"","frontmatter":{},"headers":[],"relativePath":"server/development/plugin.md","filePath":"server/development/plugin.md"}'),p={name:"server/development/plugin.md"},o=s("",8),h=s("",45);function r(d,c,k,u,g,E){const i=t("mermaid");return l(),a("div",null,[o,n(i,{dsl:`stateDiagram-v2
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

	Stopped --> [*]`}),h])}const f=e(p,[["render",r]]);export{m as __pageData,f as default};
