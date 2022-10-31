package operations

import (
"openapi/pkg/models/shared")

type GetTaskScanDataPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
    
}

type GetTaskScanDataSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetTaskScanDataRequest struct {
    PathParams GetTaskScanDataPathParams 
    Security GetTaskScanDataSecurity 
    
}

type GetTaskScanDataResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

