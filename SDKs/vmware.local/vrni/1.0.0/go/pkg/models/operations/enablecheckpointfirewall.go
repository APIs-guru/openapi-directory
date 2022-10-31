package operations

import (
"openapi/pkg/models/shared")

type EnableCheckpointFirewallPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EnableCheckpointFirewallSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type EnableCheckpointFirewallRequest struct {
    PathParams EnableCheckpointFirewallPathParams 
    Security EnableCheckpointFirewallSecurity 
    
}

type EnableCheckpointFirewallResponse struct {
    ContentType string 
    StatusCode int64 
    
}

