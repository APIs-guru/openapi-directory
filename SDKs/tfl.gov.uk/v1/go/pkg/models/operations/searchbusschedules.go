package operations

import (
"openapi/pkg/models/shared")

type SearchBusSchedulesQueryParams struct {
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type SearchBusSchedulesRequest struct {
    QueryParams SearchBusSchedulesQueryParams 
    
}

type SearchBusSchedulesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesSearchResponse *shared.TflAPIPresentationEntitiesSearchResponse 
    
}

