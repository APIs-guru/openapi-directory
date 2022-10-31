package operations

import (
"openapi/pkg/models/shared")

type UpdateAgentSitePathParams struct {
    AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
    
}

type UpdateAgentSiteSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateAgentSiteRequest struct {
    PathParams UpdateAgentSitePathParams 
    Request shared.AgentSiteID `request:"mediaType=application/json"`
    Security UpdateAgentSiteSecurity 
    
}

type UpdateAgentSiteResponse struct {
    Agent *shared.Agent 
    ContentType string 
    StatusCode int64 
    
}

