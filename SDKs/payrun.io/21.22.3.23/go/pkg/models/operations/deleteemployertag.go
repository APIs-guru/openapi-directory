package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEmployerTagPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type DeleteEmployerTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteEmployerTagRequest struct {
	PathParams DeleteEmployerTagPathParams
	Headers    DeleteEmployerTagHeaders
}

type DeleteEmployerTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
