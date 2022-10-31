package operations

import (
"openapi/pkg/models/shared")

type UpdatePanoramaFirewallPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdatePanoramaFirewallSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type UpdatePanoramaFirewallRequest struct {
    PathParams UpdatePanoramaFirewallPathParams 
    Request *shared.SwitchDataSource `request:"mediaType=application/json"`
    Security UpdatePanoramaFirewallSecurity 
    
}

type UpdatePanoramaFirewallResponse struct {
    APIError *shared.APIError 
    ContentType string 
    StatusCode int64 
    SwitchDataSource *shared.SwitchDataSource 
    
}

