package operations

import (
	"openapi/pkg/models/shared"
)

type GetFundingAccountV2PathParams struct {
	FundingAccountID string `pathParam:"style=simple,explode=false,name=fundingAccountId"`
}

type GetFundingAccountV2QueryParams struct {
	Sensitive *bool `queryParam:"style=form,explode=true,name=sensitive"`
}

type GetFundingAccountV2Request struct {
	PathParams  GetFundingAccountV2PathParams
	QueryParams GetFundingAccountV2QueryParams
}

type GetFundingAccountV2Response struct {
	ContentType             string
	FundingAccountResponse2 *shared.FundingAccountResponse2
	StatusCode              int64
	InlineResponse401       *interface{}
	InlineResponse403       *interface{}
	InlineResponse404       *interface{}
}
