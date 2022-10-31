package operations

import (
"openapi/pkg/models/shared")

type RemoveAgentPathParams struct {
    AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
    
}

type RemoveAgentSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type RemoveAgentRequest struct {
    PathParams RemoveAgentPathParams 
    Security RemoveAgentSecurity 
    
}

type RemoveAgentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

