package operations

import (
	"openapi/pkg/models/shared"
)

type GetAeAssessmentsFromEmployeePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetAeAssessmentsFromEmployeeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetAeAssessmentsFromEmployeeRequest struct {
	PathParams GetAeAssessmentsFromEmployeePathParams
	Headers    GetAeAssessmentsFromEmployeeHeaders
}

type GetAeAssessmentsFromEmployeeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
