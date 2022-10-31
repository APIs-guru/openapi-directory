package operations

import (
"openapi/pkg/models/shared")

type PublishersReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PublishersReadRequest struct {
    PathParams PublishersReadPathParams 
    
}

type PublishersReadResponse struct {
    ContentType string 
    PublisherSingle *shared.PublisherSingle 
    StatusCode int64 
    
}

