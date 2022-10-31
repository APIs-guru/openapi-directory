package operations

import (
"openapi/pkg/models/shared")

type BikePointSearchQueryParams struct {
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type BikePointSearchRequest struct {
    QueryParams BikePointSearchQueryParams 
    
}

type BikePointSearchResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesPlaces []shared.TflAPIPresentationEntitiesPlace 
    
}

