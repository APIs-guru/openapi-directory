package operations

import (
"openapi/pkg/models/shared")

type PutUsersIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutUsersIDRequest struct {
    PathParams PutUsersIDPathParams 
    Request shared.User `request:"mediaType=application/json"`
    
}

type PutUsersIDResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

