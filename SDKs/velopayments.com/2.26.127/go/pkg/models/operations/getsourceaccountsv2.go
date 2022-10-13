package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourceAccountsV2QueryParams struct {
	FundingAccountID    *string `queryParam:"style=form,explode=true,name=fundingAccountId"`
	Page                *int32  `queryParam:"style=form,explode=true,name=page"`
	PageSize            *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	PayorID             *string `queryParam:"style=form,explode=true,name=payorId"`
	PhysicalAccountID   *string `queryParam:"style=form,explode=true,name=physicalAccountId"`
	PhysicalAccountName *string `queryParam:"style=form,explode=true,name=physicalAccountName"`
	Sort                *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetSourceAccountsV2Request struct {
	QueryParams GetSourceAccountsV2QueryParams
}

type GetSourceAccountsV2Response struct {
	ContentType                 string
	ListSourceAccountResponseV2 *shared.ListSourceAccountResponseV2
	StatusCode                  int64
	InlineResponse400           *interface{}
	InlineResponse401           *interface{}
	InlineResponse403           *interface{}
	InlineResponse404           *interface{}
}
