package operations

import (
"openapi/pkg/models/shared")

type ListServiceOfferingsQueryParams struct {
    Filter map[string]interface{} `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    SortBy map[string]interface{} `queryParam:"style=deepObject,explode=true,name=sort_by"`
    
}

type ListServiceOfferingsRequest struct {
    QueryParams ListServiceOfferingsQueryParams 
    
}

type ListServiceOfferingsResponse struct {
    ContentType string 
    ServiceOfferingsCollection *shared.ServiceOfferingsCollection 
    StatusCode int64 
    
}

