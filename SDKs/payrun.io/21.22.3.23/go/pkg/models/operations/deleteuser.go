package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=UserId"`
}

type DeleteUserHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteUserRequest struct {
	PathParams DeleteUserPathParams
	Headers    DeleteUserHeaders
}

type DeleteUserResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
