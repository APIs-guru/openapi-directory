package operations

import (
	"openapi/pkg/models/shared"
)

type ResendTokenPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ResendTokenRequest struct {
	PathParams ResendTokenPathParams
	Request    shared.ResendTokenRequest `request:"mediaType=application/json"`
}

type ResendTokenResponse struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
}
