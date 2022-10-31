package operations

import (
"openapi/pkg/models/shared")

type ListVcenterManagersQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    EndTime *float64 `queryParam:"style=form,explode=true,name=end_time"`
    Size *float64 `queryParam:"style=form,explode=true,name=size"`
    StartTime *float64 `queryParam:"style=form,explode=true,name=start_time"`
    
}

type ListVcenterManagersSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type ListVcenterManagersRequest struct {
    QueryParams ListVcenterManagersQueryParams 
    Security ListVcenterManagersSecurity 
    
}

type ListVcenterManagersResponse struct {
    APIError *shared.APIError 
    ContentType string 
    PagedListResponseWithTime *shared.PagedListResponseWithTime 
    StatusCode int64 
    
}

