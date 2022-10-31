package operations

import (
"openapi/pkg/models/shared")

type EnablePanoramaFirewallPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type EnablePanoramaFirewallSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type EnablePanoramaFirewallRequest struct {
    PathParams EnablePanoramaFirewallPathParams 
    Security EnablePanoramaFirewallSecurity 
    
}

type EnablePanoramaFirewallResponse struct {
    ContentType string 
    StatusCode int64 
    
}

