package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFundingRequestPathParams struct {
	SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
}

type CreateFundingRequestRequest struct {
	PathParams CreateFundingRequestPathParams
	Request    shared.FundingRequestV2 `request:"mediaType=application/json"`
}

type CreateFundingRequestResponse struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
