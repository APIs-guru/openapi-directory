package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmployerRevisionByNumberPathParams struct {
	EmployerID     string `pathParam:"style=simple,explode=false,name=EmployerId"`
	RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
}

type GetEmployerRevisionByNumberHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetEmployerRevisionByNumberRequest struct {
	PathParams GetEmployerRevisionByNumberPathParams
	Headers    GetEmployerRevisionByNumberHeaders
}

type GetEmployerRevisionByNumberResponse struct {
	ContentType string
	Employer    *shared.Employer
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
