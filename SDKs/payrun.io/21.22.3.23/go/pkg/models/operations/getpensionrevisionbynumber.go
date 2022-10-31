package operations

import (
	"openapi/pkg/models/shared"
)

type GetPensionRevisionByNumberPathParams struct {
	EmployerID     string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PensionID      string `pathParam:"style=simple,explode=false,name=PensionId"`
	RevisionNumber string `pathParam:"style=simple,explode=false,name=RevisionNumber"`
}

type GetPensionRevisionByNumberHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetPensionRevisionByNumberRequest struct {
	PathParams GetPensionRevisionByNumberPathParams
	Headers    GetPensionRevisionByNumberHeaders
}

type GetPensionRevisionByNumberResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Pension     *shared.Pension
	StatusCode  int64
}
