package operations

import (
	"openapi/pkg/models/shared"
)

type PayorCreateApplicationRequestPathParams struct {
	PayorID string `pathParam:"style=simple,explode=false,name=payorId"`
}

type PayorCreateApplicationRequestRequest struct {
	PathParams PayorCreateApplicationRequestPathParams
	Request    shared.PayorCreateApplicationRequest `request:"mediaType=application/json"`
}

type PayorCreateApplicationRequestResponse struct {
	ContentType       string
	Headers           map[string][]string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
	InlineResponse409 *interface{}
}
