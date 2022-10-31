package operations

import (
"openapi/pkg/models/shared")

type UpgradeAgentPathParams struct {
    AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
    
}

type UpgradeAgentSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type UpgradeAgentRequest struct {
    PathParams UpgradeAgentPathParams 
    Security UpgradeAgentSecurity 
    
}

type UpgradeAgentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

