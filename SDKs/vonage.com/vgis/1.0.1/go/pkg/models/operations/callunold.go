package operations

import (
	"openapi/pkg/models/shared"
)

type CallUnoldPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CallUnoldRequest struct {
	PathParams CallUnoldPathParams
}

type CallUnoldResponse struct {
	Call          *shared.Call
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
