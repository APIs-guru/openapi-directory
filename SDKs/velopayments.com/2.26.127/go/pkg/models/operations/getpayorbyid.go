package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayorByIDPathParams struct {
	PayorID string `pathParam:"style=simple,explode=false,name=payorId"`
}

type GetPayorByIDRequest struct {
	PathParams GetPayorByIDPathParams
}

type GetPayorByIDResponse struct {
	ContentType       string
	ErrorResponse     *shared.ErrorResponse
	PayorV1           *shared.PayorV1
	StatusCode        int64
	InlineResponse403 *interface{}
}
