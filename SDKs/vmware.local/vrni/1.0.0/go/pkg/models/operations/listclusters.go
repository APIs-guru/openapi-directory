package operations

import (
"openapi/pkg/models/shared")

type ListClustersQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    EndTime *float64 `queryParam:"style=form,explode=true,name=end_time"`
    Size *float64 `queryParam:"style=form,explode=true,name=size"`
    StartTime *float64 `queryParam:"style=form,explode=true,name=start_time"`
    
}

type ListClustersSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type ListClustersRequest struct {
    QueryParams ListClustersQueryParams 
    Security ListClustersSecurity 
    
}

type ListClustersResponse struct {
    APIError *shared.APIError 
    ContentType string 
    PagedListResponseWithTime *shared.PagedListResponseWithTime 
    StatusCode int64 
    
}

