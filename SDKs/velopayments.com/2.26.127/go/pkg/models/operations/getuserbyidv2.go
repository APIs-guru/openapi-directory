package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserByIDV2PathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserByIDV2Request struct {
	PathParams GetUserByIDV2PathParams
}

type GetUserByIDV2Response struct {
	ContentType       string
	StatusCode        int64
	UserResponse      *shared.UserResponse
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
