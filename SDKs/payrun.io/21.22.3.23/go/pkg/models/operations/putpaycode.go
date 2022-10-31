package operations

import (
	"openapi/pkg/models/shared"
)

type PutPayCodePathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayCodeID  string `pathParam:"style=simple,explode=false,name=PayCodeId"`
}

type PutPayCodeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutPayCodeRequest struct {
	PathParams PutPayCodePathParams
	Headers    PutPayCodeHeaders
	Request    shared.PayCode `request:"mediaType=application/json"`
}

type PutPayCodeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	PayCode     *shared.PayCode
	StatusCode  int64
}
