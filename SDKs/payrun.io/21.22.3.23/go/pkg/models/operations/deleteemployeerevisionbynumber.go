package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEmployeeRevisionByNumberPathParams struct {
	EmployeeID     string `pathParam:"style=simple,explode=false,name=EmployeeId"`
	EmployerID     string `pathParam:"style=simple,explode=false,name=EmployerId"`
	RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
}

type DeleteEmployeeRevisionByNumberHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeleteEmployeeRevisionByNumberRequest struct {
	PathParams DeleteEmployeeRevisionByNumberPathParams
	Headers    DeleteEmployeeRevisionByNumberHeaders
}

type DeleteEmployeeRevisionByNumberResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
