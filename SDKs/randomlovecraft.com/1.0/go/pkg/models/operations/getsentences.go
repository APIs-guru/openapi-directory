package operations

import (
"openapi/pkg/models/shared")

type GetSentencesQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type GetSentencesRequest struct {
    QueryParams GetSentencesQueryParams 
    
}

type GetSentences200ApplicationJSON struct {
    Data []shared.Sentence `json:"data,omitempty"`
    
}

type GetSentencesResponse struct {
    ContentType string 
    StatusCode int64 
    GetSentences200ApplicationJSONObject *GetSentences200ApplicationJSON 
    
}

