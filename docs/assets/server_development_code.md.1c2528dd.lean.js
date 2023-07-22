import{_ as a,E as o,o as l,c as t,J as n,U as s}from"./chunks/framework.95a60cb2.js";const g=JSON.parse('{"title":"Source Code","description":"","frontmatter":{},"headers":[],"relativePath":"server/development/code.md","filePath":"server/development/code.md"}'),p={name:"server/development/code.md"},r=s("",17),c=s("",18),i=s("",20),y=s("",21),D=s("",13);function F(A,C,d,u,h,f){const e=o("mermaid");return l(),t("div",null,[r,n(e,{dsl:`flowchart LR
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
    end`}),c,n(e,{dsl:`sequenceDiagram
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
     G--)-R: TurmsNotification`}),i,n(e,{dsl:`sequenceDiagram
     participant S as turms-service
     participant G as turms-gateway
     actor R as Recipient
     S->>+G: SendNotificationRequest
     G--)R: TurmsNotification
     G-->>-S: hasSentNotificationToOneRecipient`}),y,n(e,{dsl:`sequenceDiagram
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
     E->>O: sendObject`}),D])}const b=a(p,[["render",F]]);export{g as __pageData,b as default};
