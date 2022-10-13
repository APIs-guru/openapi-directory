package operations

import (
	"openapi/pkg/models/shared"
)

type PayorAddPayorLogoPathParams struct {
	PayorID string `pathParam:"style=simple,explode=false,name=payorId"`
}

type PayorAddPayorLogoRequest struct {
	PathParams PayorAddPayorLogoPathParams
	Request    shared.PayorLogoRequest `request:"mediaType=multipart/form-data"`
}

type PayorAddPayorLogoResponse struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
