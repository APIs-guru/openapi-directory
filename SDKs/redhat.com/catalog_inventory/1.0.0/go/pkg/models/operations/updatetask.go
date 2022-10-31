package operations

import (
"openapi/pkg/models/shared")

type UpdateTaskPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateTaskRequest struct {
    PathParams UpdateTaskPathParams 
    Request shared.Task `request:"mediaType=application/json"`
    
}

type UpdateTaskResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    StatusCode int64 
    
}

