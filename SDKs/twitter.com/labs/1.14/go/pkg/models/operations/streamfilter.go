package operations

import (
"openapi/pkg/models/shared")

type StreamFilterQueryParams struct {
    Expansions [][]shared.TweetExpansionsParamTypeEnum `queryParam:"style=form,explode=true,name=expansions"`
    
}

type StreamFilterRequest struct {
    QueryParams StreamFilterQueryParams 
    
}

type StreamFilterResponse struct {
    ContentType string 
    Error *interface{} 
    Problem *interface{} 
    StatusCode int64 
    StreamFilter200ApplicationJSONObject map[string]interface{} 
    
}

