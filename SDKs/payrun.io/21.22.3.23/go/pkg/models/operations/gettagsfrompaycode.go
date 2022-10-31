package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsFromPayCodePathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
	PayCodeID  string `pathParam:"style=simple,explode=false,name=PayCodeId"`
}

type GetTagsFromPayCodeHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetTagsFromPayCodeRequest struct {
	PathParams GetTagsFromPayCodePathParams
	Headers    GetTagsFromPayCodeHeaders
}

type GetTagsFromPayCodeResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LinkCollection *shared.LinkCollection
	StatusCode     int64
}
