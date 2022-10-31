package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromPayCodePathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayCodeID  string `pathParam:"style=simple,explode=false,name=PayCodeId"`
	TagID      string `pathParam:"style=simple,explode=false,name=TagId"`
}

type GetTagFromPayCodeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTagFromPayCodeRequest struct {
	PathParams GetTagFromPayCodePathParams
	Headers    GetTagFromPayCodeHeaders
}

type GetTagFromPayCodeResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
