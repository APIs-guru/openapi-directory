package operations

import (
	"openapi/pkg/models/shared"
)

type PostNewAeAssessmentPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostNewAeAssessmentHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostNewAeAssessmentRequest struct {
	PathParams PostNewAeAssessmentPathParams
	Headers    PostNewAeAssessmentHeaders
	Request    shared.AeAssessment `request:"mediaType=application/json"`
}

type PostNewAeAssessmentResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
