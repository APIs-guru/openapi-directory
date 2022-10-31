package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFundingRequestV3PathParams struct {
	SourceAccountID string `pathParam:"style=simple,explode=false,name=sourceAccountId"`
}

type CreateFundingRequestV3Request struct {
	PathParams CreateFundingRequestV3PathParams
	Request    shared.FundingRequestV3 `request:"mediaType=application/json"`
}

type CreateFundingRequestV3Response struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
