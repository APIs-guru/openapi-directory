package operations

import (
"openapi/pkg/models/shared")

type PutReportingInstructionPathParams struct {
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    ReportingInstructionID string `pathParam:"style=simple,explode=false,name=ReportingInstructionId"`
    
}

type PutReportingInstructionHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutReportingInstructionRequest struct {
    PathParams PutReportingInstructionPathParams 
    Headers PutReportingInstructionHeaders 
    Request shared.ReportingInstruction `request:"mediaType=application/json"`
    
}

type PutReportingInstructionResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    ReportingInstruction *shared.ReportingInstruction 
    StatusCode int64 
    
}

