package operations

import (
	"openapi/pkg/models/shared"
)

type PostUserHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
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
