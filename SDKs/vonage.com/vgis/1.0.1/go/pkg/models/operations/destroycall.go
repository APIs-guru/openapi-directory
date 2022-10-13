package operations

import (
	"openapi/pkg/models/shared"
)

type DestroyCallPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DestroyCallRequest struct {
	PathParams DestroyCallPathParams
}

type DestroyCallResponse struct {
	Calls         []shared.Call
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
