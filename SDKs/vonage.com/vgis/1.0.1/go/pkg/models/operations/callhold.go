package operations

import (
	"openapi/pkg/models/shared"
)

type CallHoldPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CallHoldRequest struct {
	PathParams CallHoldPathParams
}

type CallHoldResponse struct {
	Call          *shared.Call
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
