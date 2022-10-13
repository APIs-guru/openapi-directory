package operations

import (
	"openapi/pkg/models/shared"
)

type ResendPayeeInviteV3PathParams struct {
	PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
}

type ResendPayeeInviteV3Request struct {
	PathParams ResendPayeeInviteV3PathParams
	Request    shared.InvitePayeeRequest `request:"mediaType=application/json"`
}

type ResendPayeeInviteV3Response struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
	InlineResponse409 *interface{}
}
