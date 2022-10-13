package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDpsMessagePathParams struct {
	DpsMessageID string `pathParam:"style=simple,explode=false,name=DpsMessageId"`
	EmployerID   string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type DeleteDpsMessageHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteDpsMessageRequest struct {
	PathParams DeleteDpsMessagePathParams
	Headers    DeleteDpsMessageHeaders
}

type DeleteDpsMessageResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
