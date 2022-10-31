package operations

import (
"openapi/pkg/models/shared")

type ListHpvcManagersSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type ListHpvcManagersRequest struct {
    Security ListHpvcManagersSecurity 
    
}

type ListHpvcManagersResponse struct {
    ContentType string 
    DataSourceListResponse *shared.DataSourceListResponse 
    StatusCode int64 
    
}

