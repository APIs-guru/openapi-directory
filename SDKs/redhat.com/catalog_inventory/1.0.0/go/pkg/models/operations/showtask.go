package operations

import (
"openapi/pkg/models/shared")

type ShowTaskPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ShowTaskRequest struct {
    PathParams ShowTaskPathParams 
    
}

type ShowTaskResponse struct {
    ContentType string 
    ErrorNotFound *shared.ErrorNotFound 
    StatusCode int64 
    Task *shared.Task 
    
}

