package operations

import (
	"openapi/pkg/models/shared"
)

type GetFundingAccountPathParams struct {
	FundingAccountID string `pathParam:"style=simple,explode=false,name=fundingAccountId"`
}

type GetFundingAccountQueryParams struct {
	Sensitive *bool `queryParam:"style=form,explode=true,name=sensitive"`
}

type GetFundingAccountRequest struct {
	PathParams  GetFundingAccountPathParams
	QueryParams GetFundingAccountQueryParams
}

type GetFundingAccountResponse struct {
	ContentType            string
	FundingAccountResponse *shared.FundingAccountResponse
	StatusCode             int64
	InlineResponse401      *interface{}
	InlineResponse403      *interface{}
	InlineResponse404      *interface{}
}
