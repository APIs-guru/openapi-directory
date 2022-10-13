package operations

import (
	"openapi/pkg/models/shared"
)

type PatchEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PatchEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PatchEmployerRequest struct {
	PathParams PatchEmployerPathParams
	Headers    PatchEmployerHeaders
	Request    shared.Employer `request:"mediaType=application/json"`
}

type PatchEmployerResponse struct {
	ContentType string
	Employer    *shared.Employer
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
