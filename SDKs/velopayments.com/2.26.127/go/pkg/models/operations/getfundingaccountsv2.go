package operations

import (
	"openapi/pkg/models/shared"
)

type GetFundingAccountsV2QueryParams struct {
	Country   *string                        `queryParam:"style=form,explode=true,name=country"`
	Currency  *string                        `queryParam:"style=form,explode=true,name=currency"`
	Name      *string                        `queryParam:"style=form,explode=true,name=name"`
	Page      *int32                         `queryParam:"style=form,explode=true,name=page"`
	PageSize  *int32                         `queryParam:"style=form,explode=true,name=pageSize"`
	PayorID   *string                        `queryParam:"style=form,explode=true,name=payorId"`
	Sensitive *bool                          `queryParam:"style=form,explode=true,name=sensitive"`
	Sort      *string                        `queryParam:"style=form,explode=true,name=sort"`
	Type      *shared.FundingAccountTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetFundingAccountsV2Request struct {
	QueryParams GetFundingAccountsV2QueryParams
}

type GetFundingAccountsV2Response struct {
	ContentType                  string
	ListFundingAccountsResponse2 *shared.ListFundingAccountsResponse2
	StatusCode                   int64
	InlineResponse400            *interface{}
	InlineResponse403            *interface{}
}
