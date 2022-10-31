package operations

import (
	"openapi/pkg/models/shared"
)

type PutDpsMessagePathParams struct {
	DpsMessageID string `pathParam:"style=simple,explode=false,name=DpsMessageId"`
	EmployerID   string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PutDpsMessageHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutDpsMessageRequest struct {
	PathParams PutDpsMessagePathParams
	Headers    PutDpsMessageHeaders
}

type PutDpsMessageResponse struct {
	ContentType string
	DpsMessage  *shared.DpsMessage
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
