package operations

import (
"openapi/pkg/models/shared")

type GetTaskChangeReportPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
    
}

type GetTaskChangeReportSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetTaskChangeReportRequest struct {
    PathParams GetTaskChangeReportPathParams 
    Security GetTaskChangeReportSecurity 
    
}

type GetTaskChangeReportResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

