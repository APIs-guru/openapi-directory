package operations

import (
"openapi/pkg/models/shared")

type PutNewAeAssessmentPathParams struct {
    AeAssessmentID string `pathParam:"style=simple,explode=false,name=AEAssessmentId"`
    EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
    EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
    
}

type PutNewAeAssessmentHeaders struct {
    APIVersion string `header:"style=simple,explode=false,name=Api-Version"`
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    
}

type PutNewAeAssessmentRequest struct {
    PathParams PutNewAeAssessmentPathParams 
    Headers PutNewAeAssessmentHeaders 
    Request shared.AeAssessment `request:"mediaType=application/json"`
    
}

type PutNewAeAssessmentResponse struct {
    AeAssessment *shared.AeAssessment 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

