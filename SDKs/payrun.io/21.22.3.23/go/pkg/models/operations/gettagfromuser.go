package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagFromUserPathParams struct {
	TagID  string `pathParam:"style=simple,explode=false,name=TagId"`
	UserID string `pathParam:"style=simple,explode=false,name=UserId"`
}

type GetTagFromUserHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetTagFromUserRequest struct {
	PathParams GetTagFromUserPathParams
	Headers    GetTagFromUserHeaders
}

type GetTagFromUserResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
