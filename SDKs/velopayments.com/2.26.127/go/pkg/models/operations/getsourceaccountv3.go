package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourceAccountV3PathParams struct {
	SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
}

type GetSourceAccountV3Request struct {
	PathParams GetSourceAccountV3PathParams
}

type GetSourceAccountV3Response struct {
	ContentType             string
	SourceAccountResponseV3 *shared.SourceAccountResponseV3
	StatusCode              int64
	InlineResponse400       *interface{}
	InlineResponse401       *interface{}
	InlineResponse403       *interface{}
	InlineResponse404       *interface{}
}
