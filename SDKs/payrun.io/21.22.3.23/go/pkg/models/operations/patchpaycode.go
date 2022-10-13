package operations

import (
	"openapi/pkg/models/shared"
)

type PatchPayCodePathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayCodeID  string `pathParam:"style=simple,explode=false,name=PayCodeId"`
}

type PatchPayCodeHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PatchPayCodeRequest struct {
	PathParams PatchPayCodePathParams
	Headers    PatchPayCodeHeaders
	Request    shared.PayCode `request:"mediaType=application/json"`
}

type PatchPayCodeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	PayCode     *shared.PayCode
	StatusCode  int64
}
