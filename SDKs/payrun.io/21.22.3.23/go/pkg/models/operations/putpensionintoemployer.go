package operations

import (
	"openapi/pkg/models/shared"
)

type PutPensionIntoEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PensionID  string `pathParam:"style=simple,explode=false,name=PensionId"`
}

type PutPensionIntoEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutPensionIntoEmployerRequest struct {
	PathParams PutPensionIntoEmployerPathParams
	Headers    PutPensionIntoEmployerHeaders
	Request    shared.Pension `request:"mediaType=application/json"`
}

type PutPensionIntoEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Pension     *shared.Pension
	StatusCode  int64
}
