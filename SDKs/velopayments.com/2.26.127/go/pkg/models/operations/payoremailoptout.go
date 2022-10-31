package operations

import (
	"openapi/pkg/models/shared"
)

type PayorEmailOptOutPathParams struct {
	PayorID string `pathParam:"style=simple,explode=false,name=payorId"`
}

type PayorEmailOptOutRequest struct {
	PathParams PayorEmailOptOutPathParams
	Request    shared.PayorEmailOptOutRequest `request:"mediaType=application/json"`
}

type PayorEmailOptOutResponse struct {
	ContentType       string
	ErrorResponse     *shared.ErrorResponse
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse403 *interface{}
}
