package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayCodeFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayCodeID  string `pathParam:"style=simple,explode=false,name=PayCodeId"`
}

type GetPayCodeFromEmployerHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetPayCodeFromEmployerRequest struct {
	PathParams GetPayCodeFromEmployerPathParams
	Headers    GetPayCodeFromEmployerHeaders
}

type GetPayCodeFromEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	PayCode     *shared.PayCode
	StatusCode  int64
}
