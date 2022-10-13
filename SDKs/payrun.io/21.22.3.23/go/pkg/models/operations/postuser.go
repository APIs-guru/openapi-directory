package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type PostUserRequest struct {
	Headers PostUserHeaders
}

type PostUserResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
