package operations

import (
"openapi/pkg/models/shared")

type SearchGetQueryParams struct {
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type SearchGetRequest struct {
    QueryParams SearchGetQueryParams 
    
}

type SearchGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    TflAPIPresentationEntitiesSearchResponse *shared.TflAPIPresentationEntitiesSearchResponse 
    
}

