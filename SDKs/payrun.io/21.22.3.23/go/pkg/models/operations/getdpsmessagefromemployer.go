package operations

import (
	"openapi/pkg/models/shared"
)

type GetDpsMessageFromEmployerPathParams struct {
	DpsMessageID string `pathParam:"style=simple,explode=false,name=DpsMessageId"`
	EmployerID   string `pathParam:"style=simple,explode=false,name=EmployerId"`
}

type GetDpsMessageFromEmployerHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetDpsMessageFromEmployerRequest struct {
	PathParams GetDpsMessageFromEmployerPathParams
	Headers    GetDpsMessageFromEmployerHeaders
}

type GetDpsMessageFromEmployerResponse struct {
	ContentType string
	DpsMessage  *shared.DpsMessage
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
