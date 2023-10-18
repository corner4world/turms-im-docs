import{_ as e,C as o,o as l,c as p,H as a,Q as s}from"./chunks/framework.0882ee08.js";const B=JSON.parse('{"title":"源码","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/server/development/code.md","filePath":"zh-CN/server/development/code.md"}'),t={name:"zh-CN/server/development/code.md"},c=s("",17),r=s("",18),E=s("",21),y=s("",21),i=s("",13);function d(u,F,C,g,m,f){const n=o("mermaid");return l(),p("div",null,[c,a(n,{dsl:`flowchart LR
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
    G--)-R: TurmsNotification`}),E,a(n,{dsl:`sequenceDiagram
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
    E->>O: sendObject`}),i])}const v=e(t,[["render",d]]);export{B as __pageData,v as default};
