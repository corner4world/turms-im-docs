import{_ as a,C as o,o as l,c as p,H as e,Q as s}from"./chunks/framework.0882ee08.js";const v=JSON.parse('{"title":"Source Code","description":"","frontmatter":{},"headers":[],"relativePath":"server/development/code.md","filePath":"server/development/code.md"}'),t={name:"server/development/code.md"},r=s("",17),c=s("",18),i=s("",20),E=s("",21),y=s("",13);function d(u,h,f,g,m,F){const n=o("mermaid");return l(),p("div",null,[r,e(n,{dsl:`flowchart LR
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
    end`}),c,e(n,{dsl:`sequenceDiagram
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
     G--)-R: TurmsNotification`}),i,e(n,{dsl:`sequenceDiagram
     participant S as turms-service
     participant G as turms-gateway
     actor R as Recipient
     S->>+G: SendNotificationRequest
     G--)R: TurmsNotification
     G-->>-S: hasSentNotificationToOneRecipient`}),E,e(n,{dsl:`sequenceDiagram
     participant S as ServiceRequestService
     participant R as RpcService
     participant D as Discovery Service
     participant C as CodecService
     participant E as RpcEndpoint
     participant F as RpcFrameEncoder
     participant O as Channel Operations
     S->>R: handleServiceRequest
     R->>D: getOtherActiveConnectedMembers
     D-->>R: otherActiveConnectedMembers(List<Member>)
     R->>C: serializeWithoutCodecId
     C-->>R: requestBody (ByteBuf)
     R->>E: sendRequest
     E->>F: encodeRequest
     F-->>E: requestBuffer(ByteBuf)
     E->>O: sendObject`}),y])}const C=a(t,[["render",d]]);export{v as __pageData,C as default};
