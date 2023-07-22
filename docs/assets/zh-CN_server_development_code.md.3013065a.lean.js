import{_ as o,E as l,o as e,c as p,J as a,U as s}from"./chunks/framework.95a60cb2.js";const g=JSON.parse('{"title":"源码","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/development/code.md","filePath":"zh-CN/server/development/code.md"}'),t={name:"zh-CN/server/development/code.md"},c=s("",17),r=s("",18),D=s("",21),y=s("",21),F=s("",13);function A(C,i,d,u,m,f){const n=l("mermaid");return e(),p("div",null,[c,a(n,{dsl:`flowchart LR
    access-->domain
    domain-->storage
    access-->infra
    domain-->infra
    storage-->infra
    
    subgraph domain
        subgraph user/group/message/...
            domain-access(access)-->admin
            domain-access(access)-->client/servicerequest
            
            admin-->admin-controller(controller)-->service
            admin-->admin-dto(dto)
            admin-->admin-others(...)
            
            client/servicerequest-->controller-->service
            client/servicerequest-->...
            
            service-->repository
            service-->manager
            service-->bo
            service-->rpc
            
            repository-->po
            
            model
        end
    end
    
    subgraph storage
        mongo
        redis
    end
    
    subgraph infra
        cluster
        config
        logging
        metrics
        ...
    end`}),r,a(n,{dsl:`sequenceDiagram
    actor C as Client
    actor R as Recipient
    participant G as turms-gateway
    participant S as turms-service
    C->>+G: TurmsRequest
    alt Request for turms-service
        G->>+S: HandleServiceRequest
        S-->>G: ServiceResponse
        S--)-G: SendNotificationRequest
    end
    G-->>C: TurmsNotification
    G--)-R: TurmsNotification`}),D,a(n,{dsl:`sequenceDiagram
    participant S as turms-service
    participant G as turms-gateway
    actor R as Recipient
    S->>+G: SendNotificationRequest
    G--)R: TurmsNotification
    G-->>-S: hasSentNotificationToOneRecipient`}),y,a(n,{dsl:`sequenceDiagram
    participant S as ServiceRequestService
    participant R as RpcService
    participant D as DiscoveryService
    participant C as CodecService
    participant E as RpcEndpoint
    participant F as RpcFrameEncoder
    participant O as ChannelOperations
    S->>R: handleServiceRequest
    R->>D: getOtherActiveConnectedMembers
    D-->>R: otherActiveConnectedMembers(List<Member>)
    R->>C: serializeWithoutCodecId
    C-->>R: requestBody (ByteBuf)
    R->>E: sendRequest
    E->>F: encodeRequest
    F-->>E: requestBuffer(ByteBuf)
    E->>O: sendObject`}),F])}const v=o(t,[["render",A]]);export{g as __pageData,v as default};
