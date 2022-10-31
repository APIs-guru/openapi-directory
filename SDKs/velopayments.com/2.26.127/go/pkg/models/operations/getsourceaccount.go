package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourceAccountPathParams struct {
	SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
}

type GetSourceAccountRequest struct {
	PathParams GetSourceAccountPathParams
}

type GetSourceAccountResponse struct {
	ContentType           string
	SourceAccountResponse *shared.SourceAccountResponse
	StatusCode            int64
	InlineResponse401     *interface{}
	InlineResponse404     *interface{}
}
