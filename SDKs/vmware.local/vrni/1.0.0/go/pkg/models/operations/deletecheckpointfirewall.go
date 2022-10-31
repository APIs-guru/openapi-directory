package operations

import (
"openapi/pkg/models/shared")

type DeleteCheckpointFirewallPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteCheckpointFirewallSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteCheckpointFirewallRequest struct {
    PathParams DeleteCheckpointFirewallPathParams 
    Security DeleteCheckpointFirewallSecurity 
    
}

type DeleteCheckpointFirewallResponse struct {
    ContentType string 
    StatusCode int64 
    
}

