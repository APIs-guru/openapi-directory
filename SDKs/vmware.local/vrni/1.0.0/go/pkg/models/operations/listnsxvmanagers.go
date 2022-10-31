package operations

import (
"openapi/pkg/models/shared")

type ListNsxvManagersSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type ListNsxvManagersRequest struct {
    Security ListNsxvManagersSecurity 
    
}

type ListNsxvManagersResponse struct {
    ContentType string 
    DataSourceListResponse *shared.DataSourceListResponse 
    StatusCode int64 
    
}

