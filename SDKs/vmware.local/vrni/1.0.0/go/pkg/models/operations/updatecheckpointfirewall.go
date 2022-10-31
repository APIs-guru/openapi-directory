package operations

import (
"openapi/pkg/models/shared")

type UpdateCheckpointFirewallPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateCheckpointFirewallSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdateCheckpointFirewallRequest struct {
    PathParams UpdateCheckpointFirewallPathParams 
    Request *shared.SwitchDataSource `request:"mediaType=application/json"`
    Security UpdateCheckpointFirewallSecurity 
    
}

type UpdateCheckpointFirewallResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

