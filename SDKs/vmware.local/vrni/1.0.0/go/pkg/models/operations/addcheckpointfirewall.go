package operations

import (
"openapi/pkg/models/shared")

type AddCheckpointFirewallSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddCheckpointFirewallRequest struct {
    Request *shared.SwitchDataSourceRequest `request:"mediaType=application/json"`
    Security AddCheckpointFirewallSecurity 
    
}

type AddCheckpointFirewallResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

