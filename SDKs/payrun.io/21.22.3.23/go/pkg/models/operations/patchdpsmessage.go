package operations

import (
	"openapi/pkg/models/shared"
)

type PatchDpsMessagePathParams struct {
	DpsMessageID string `pathParam:"style=simple,explode=false,name=DpsMessageId"`
	EmployerID   string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type PatchDpsMessageHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PatchDpsMessageRequest struct {
	PathParams PatchDpsMessagePathParams
	Headers    PatchDpsMessageHeaders
}

type PatchDpsMessageResponse struct {
	ContentType string
	DpsMessage  *shared.DpsMessage
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
