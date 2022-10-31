package operations

import (
"openapi/pkg/models/shared")

type PublishedEarlyDayMotionGetPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PublishedEarlyDayMotionGetRequest struct {
    PathParams PublishedEarlyDayMotionGetPathParams 
    
}

type PublishedEarlyDayMotionGetResponse struct {
    APIResponseListPublishedWrittenQuestion *shared.APIResponseListPublishedWrittenQuestion 
    APIResponseObject *shared.APIResponseObject 
    ContentType string 
    StatusCode int64 
    
}

