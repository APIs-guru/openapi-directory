package operations

import (
"openapi/pkg/models/shared")

type GetAgentPathParams struct {
    AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
    
}

type GetAgentSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAgentRequest struct {
    PathParams GetAgentPathParams 
    Security GetAgentSecurity 
    
}

type GetAgentResponse struct {
    Agent *shared.Agent 
    ContentType string 
    StatusCode int64 
    
}

