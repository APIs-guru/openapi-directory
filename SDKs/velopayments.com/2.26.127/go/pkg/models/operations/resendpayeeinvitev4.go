package operations

import (
	"openapi/pkg/models/shared"
)

type ResendPayeeInviteV4PathParams struct {
	PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
}

type ResendPayeeInviteV4Request struct {
	PathParams ResendPayeeInviteV4PathParams
	Request    shared.InvitePayeeRequest2 `request:"mediaType=application/json"`
}

type ResendPayeeInviteV4Response struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
	InlineResponse409 *interface{}
}
