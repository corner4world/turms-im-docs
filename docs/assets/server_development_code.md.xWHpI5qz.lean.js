import{_ as a,D as n,c as t,I as e,a3 as s,o as h}from"./chunks/framework.ViWktWD6.js";const b=JSON.parse('{"title":"Source Code","description":"","frontmatter":{},"headers":[],"relativePath":"server/development/code.md","filePath":"server/development/code.md"}'),l={name:"server/development/code.md"},r=s("",17),p=s("",18),k=s("",20),o=s("",21),d=s("",13);function c(E,g,y,u,m,F){const i=n("mermaid");return h(),t("div",null,[r,e(i,{dsl:`flowchart LR
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
    end`}),p,e(i,{dsl:`sequenceDiagram
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
     G--)-R: TurmsNotification`}),k,e(i,{dsl:`sequenceDiagram
     participant S as turms-service
     participant G as turms-gateway
     actor R as Recipient
     S->>+G: SendNotificationRequest
     G--)R: TurmsNotification
     G-->>-S: hasSentNotificationToOneRecipient`}),o,e(i,{dsl:`sequenceDiagram
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
     E->>O: sendObject`}),d])}const v=a(l,[["render",c]]);export{b as __pageData,v as default};
