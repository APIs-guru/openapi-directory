package operations

import (
	"openapi/pkg/models/shared"
)

type GetAeAssessmentFromEmployeePathParams struct {
	AeAssessmentID string `pathParam:"style=simple,explode=false,name=AEAssessmentId"`
	EmployeeID     string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID     string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAeAssessmentFromEmployeeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetAeAssessmentFromEmployeeRequest struct {
	PathParams GetAeAssessmentFromEmployeePathParams
	Headers    GetAeAssessmentFromEmployeeHeaders
}

type GetAeAssessmentFromEmployeeResponse struct {
	AeAssessment *shared.AeAssessment
	ContentType  string
	ErrorModel   *shared.ErrorModel
	StatusCode   int64
}
