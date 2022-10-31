package operations

import (
	"openapi/pkg/models/shared"
)

type PatchUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=UserId"`
}

type PatchUserHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PatchUserRequest struct {
	PathParams PatchUserPathParams
	Headers    PatchUserHeaders
}

type PatchUserResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	User        *shared.User
}
