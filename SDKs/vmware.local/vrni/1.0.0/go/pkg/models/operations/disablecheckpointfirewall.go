package operations

import (
"openapi/pkg/models/shared")

type DisableCheckpointFirewallPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DisableCheckpointFirewallSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisableCheckpointFirewallRequest struct {
    PathParams DisableCheckpointFirewallPathParams 
    Security DisableCheckpointFirewallSecurity 
    
}

type DisableCheckpointFirewallResponse struct {
    ContentType string 
    StatusCode int64 
    
}

