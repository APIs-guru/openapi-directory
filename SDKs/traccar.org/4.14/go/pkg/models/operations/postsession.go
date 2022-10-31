package operations

import (
"openapi/pkg/models/shared")

type PostSessionRequest struct {
    Request interface{} `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type PostSessionResponse struct {
    ContentType string 
    StatusCode int64 
    User *shared.User 
    
}

