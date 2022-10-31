package operations

import (
"openapi/pkg/models/shared")

type ListWorkweekConfigsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type ListWorkweekConfigsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListWorkweekConfigsRequest struct {
    QueryParams ListWorkweekConfigsQueryParams 
    Security ListWorkweekConfigsSecurity 
    
}

type ListWorkweekConfigsResponse struct {
    ContentType string 
    ListWorkweekConfigsResponse *shared.ListWorkweekConfigsResponse 
    StatusCode int64 
    
}

