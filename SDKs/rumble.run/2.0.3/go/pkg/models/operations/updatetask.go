package operations

import (
"openapi/pkg/models/shared")

type UpdateTaskPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
    
}

type UpdateTaskSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateTaskRequest struct {
    PathParams UpdateTaskPathParams 
    Request shared.Task `request:"mediaType=application/json"`
    Security UpdateTaskSecurity 
    
}

type UpdateTaskResponse struct {
    ContentType string 
    StatusCode int64 
    Task *shared.Task 
    
}

