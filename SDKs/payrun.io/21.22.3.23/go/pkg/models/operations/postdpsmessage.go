package operations

import (
	"openapi/pkg/models/shared"
)

type PostDpsMessagePathParams struct {
	EmployerID string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PostDpsMessageHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PostDpsMessageRequest struct {
	PathParams PostDpsMessagePathParams
	Headers    PostDpsMessageHeaders
}

type PostDpsMessageResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	Link        *shared.Link
	StatusCode  int64
}
