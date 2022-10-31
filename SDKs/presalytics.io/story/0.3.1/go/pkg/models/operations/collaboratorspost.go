package operations

import (
"openapi/pkg/models/shared")

type CollaboratorsPostRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    
}

type CollaboratorsPostResponse struct {
    ContentType string 
    StatusCode int64 
    PermissionTypes []shared.PermissionType 
    ProblemDetail *interface{} 
    
}

