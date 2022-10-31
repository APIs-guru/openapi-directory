package operations

import (
"openapi/pkg/models/shared")

type SatisfyPostPathParams struct {
    PostID string `pathParam:"style=simple,explode=false,name=post_id"`
    
}

type SatisfyPostRequest struct {
    PathParams SatisfyPostPathParams 
    
}

type SatisfyPostResponse struct {
    ContentType string 
    Post *shared.Post 
    StatusCode int64 
    
}

