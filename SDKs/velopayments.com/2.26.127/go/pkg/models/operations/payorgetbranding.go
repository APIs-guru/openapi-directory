package operations

import (
	"openapi/pkg/models/shared"
)

type PayorGetBrandingPathParams struct {
	PayorID string `pathParam:"style=simple,explode=false,name=payorId"`
}

type PayorGetBrandingRequest struct {
	PathParams PayorGetBrandingPathParams
}

type PayorGetBrandingResponse struct {
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	PayorBrandingResponse *shared.PayorBrandingResponse
	StatusCode            int64
	InlineResponse400     *interface{}
	InlineResponse403     *interface{}
}
