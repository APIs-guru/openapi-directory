package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromEmployerPathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTagFromEmployerRequest struct {
	PathParams GetTagFromEmployerPathParams
	Headers    GetTagFromEmployerHeaders
}

type GetTagFromEmployerResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
