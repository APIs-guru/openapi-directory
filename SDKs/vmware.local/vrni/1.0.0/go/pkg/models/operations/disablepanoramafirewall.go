package operations

import (
"openapi/pkg/models/shared")

type DisablePanoramaFirewallPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DisablePanoramaFirewallSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type DisablePanoramaFirewallRequest struct {
    PathParams DisablePanoramaFirewallPathParams 
    Security DisablePanoramaFirewallSecurity 
    
}

type DisablePanoramaFirewallResponse struct {
    ContentType string 
    StatusCode int64 
    
}

