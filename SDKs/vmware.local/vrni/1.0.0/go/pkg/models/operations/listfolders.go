package operations

import (
"openapi/pkg/models/shared")

type ListFoldersQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    EndTime *float64 `queryParam:"style=form,explode=true,name=end_time"`
    Size *float64 `queryParam:"style=form,explode=true,name=size"`
    StartTime *float64 `queryParam:"style=form,explode=true,name=start_time"`
    
}

type ListFoldersSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

type ListFoldersRequest struct {
    QueryParams ListFoldersQueryParams 
    Security ListFoldersSecurity 
    
}

type ListFoldersResponse struct {
    APIError *shared.APIError 
    ContentType string 
    PagedListResponseWithTime *shared.PagedListResponseWithTime 
    StatusCode int64 
    
}

