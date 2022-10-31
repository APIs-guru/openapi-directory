package operations

import (
"openapi/pkg/models/shared")

type ListPanoramaFirewallsSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type ListPanoramaFirewallsRequest struct {
    Security ListPanoramaFirewallsSecurity 
    
}

type ListPanoramaFirewallsResponse struct {
    ContentType string 
    DataSourceListResponse *shared.DataSourceListResponse 
    StatusCode int64 
    
}

