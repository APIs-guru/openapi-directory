package operations

import (
"openapi/pkg/models/shared")

type WithdrawPostPathParams struct {
    PostID string `pathParam:"style=simple,explode=false,name=post_id"`
    
}

type WithdrawPostRequest struct {
    PathParams WithdrawPostPathParams 
    
}

type WithdrawPostResponse struct {
    ContentType string 
    Post *shared.Post 
    StatusCode int64 
    
}

