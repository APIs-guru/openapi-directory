package operations

import (
	"openapi/pkg/models/shared"
)

type PutEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PutEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PutEmployerRequest struct {
	PathParams PutEmployerPathParams
	Headers    PutEmployerHeaders
	Request    shared.Employer `request:"mediaType=application/json"`
}

type PutEmployerResponse struct {
	ContentType string
	Employer    *shared.Employer
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
