package operations

import (
"openapi/pkg/models/shared")

type StreamSampleQueryParams struct {
    Expansions [][]shared.TweetExpansionsParamTypeEnum `queryParam:"style=form,explode=true,name=expansions"`
    
}

type StreamSampleRequest struct {
    QueryParams StreamSampleQueryParams 
    
}

type StreamSampleResponse struct {
    ContentType string 
    Error *interface{} 
    Problem *interface{} 
    StatusCode int64 
    StreamSample200ApplicationJSONObject map[string]interface{} 
    
}

