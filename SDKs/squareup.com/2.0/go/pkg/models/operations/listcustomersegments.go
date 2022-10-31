package operations

import (
"openapi/pkg/models/shared")

type ListCustomerSegmentsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type ListCustomerSegmentsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type ListCustomerSegmentsRequest struct {
    QueryParams ListCustomerSegmentsQueryParams 
    Security ListCustomerSegmentsSecurity 
    
}

type ListCustomerSegmentsResponse struct {
    ContentType string 
    ListCustomerSegmentsResponse *shared.ListCustomerSegmentsResponse 
    StatusCode int64 
    
}

