package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePayCodePathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayCodeID  string `pathParam:"style=simple,explode=false,name=PayCodeId"`
}

type DeletePayCodeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type DeletePayCodeRequest struct {
	PathParams DeletePayCodePathParams
	Headers    DeletePayCodeHeaders
}

type DeletePayCodeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
