package operations

import (
"openapi/pkg/models/shared")

type PutUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=UserId"`
    
}

type PutUserHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutUserRequest struct {
    PathParams PutUserPathParams 
    Headers PutUserHeaders 
    
}

type PutUserResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    User *shared.User 
    
}

