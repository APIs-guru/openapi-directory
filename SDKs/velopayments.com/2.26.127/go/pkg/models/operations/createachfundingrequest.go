package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAchFundingRequestPathParams struct {
	SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
}

type CreateAchFundingRequestRequest struct {
	PathParams CreateAchFundingRequestPathParams
	Request    shared.FundingRequestV1 `request:"mediaType=application/json"`
}

type CreateAchFundingRequestResponse struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse404 *interface{}
}
