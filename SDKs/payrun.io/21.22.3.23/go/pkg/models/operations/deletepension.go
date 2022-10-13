package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePensionPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PensionID  string `pathParam:"style=simple,explode=false,name=PensionId"`
}

type DeletePensionHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeletePensionRequest struct {
	PathParams DeletePensionPathParams
	Headers    DeletePensionHeaders
}

type DeletePensionResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
