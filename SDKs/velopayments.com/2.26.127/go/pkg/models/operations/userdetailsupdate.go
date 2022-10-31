package operations

import (
	"openapi/pkg/models/shared"
)

type UserDetailsUpdatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserDetailsUpdateRequest struct {
	PathParams UserDetailsUpdatePathParams
	Request    shared.UserDetailsUpdateRequest `request:"mediaType=application/json"`
}

type UserDetailsUpdateResponse struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
	InlineResponse409 *interface{}
}
