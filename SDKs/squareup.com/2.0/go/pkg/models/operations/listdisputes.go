package operations

import (
"openapi/pkg/models/shared")

type ListDisputesQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    LocationID *string `queryParam:"style=form,explode=true,name=location_id"`
    States *string `queryParam:"style=form,explode=true,name=states"`
    
}

type ListDisputesSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListDisputesRequest struct {
    QueryParams ListDisputesQueryParams 
    Security ListDisputesSecurity 
    
}

type ListDisputesResponse struct {
    ContentType string 
    ListDisputesResponse *shared.ListDisputesResponse 
    StatusCode int64 
    
}

