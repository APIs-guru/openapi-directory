package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=UserId"`
}

type GetUserHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type GetUserRequest struct {
	PathParams GetUserPathParams
	Headers    GetUserHeaders
}

type GetUserResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	User        *shared.User
}
