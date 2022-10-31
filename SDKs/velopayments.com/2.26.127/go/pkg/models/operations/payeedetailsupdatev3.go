package operations

import (
	"openapi/pkg/models/shared"
)

type PayeeDetailsUpdateV3PathParams struct {
	PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
}

type PayeeDetailsUpdateV3Request struct {
	PathParams PayeeDetailsUpdateV3PathParams
	Request    shared.UpdatePayeeDetailsRequest `request:"mediaType=application/json"`
}

type PayeeDetailsUpdateV3Response struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
