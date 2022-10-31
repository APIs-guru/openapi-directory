package operations

import (
"openapi/pkg/models/shared")

type GetSentencesFromBookPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSentencesFromBookQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type GetSentencesFromBookRequest struct {
    PathParams GetSentencesFromBookPathParams 
    QueryParams GetSentencesFromBookQueryParams 
    
}

type GetSentencesFromBook200ApplicationJSON struct {
    Data []shared.Sentence `json:"data,omitempty"`
    
}

type GetSentencesFromBookResponse struct {
    ContentType string 
    StatusCode int64 
    GetSentencesFromBook200ApplicationJSONObject *GetSentencesFromBook200ApplicationJSON 
    
}

