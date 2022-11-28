package operations

import (
	"openapi/pkg/models/shared"
)

type PayeeDetailsUpdateV4PathParams struct {
	PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
}

type PayeeDetailsUpdateV4Request struct {
	PathParams PayeeDetailsUpdateV4PathParams
	Request    shared.UpdatePayeeDetailsRequest2Input `request:"mediaType=application/json"`
}

type PayeeDetailsUpdateV4Response struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
