package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAeAssessmentPathParams struct {
	AeAssessmentID string `pathParam:"style=simple,explode=false,name=AEAssessmentId"`
	EmployeeID     string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID     string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type DeleteAeAssessmentHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteAeAssessmentRequest struct {
	PathParams DeleteAeAssessmentPathParams
	Headers    DeleteAeAssessmentHeaders
}

type DeleteAeAssessmentResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
