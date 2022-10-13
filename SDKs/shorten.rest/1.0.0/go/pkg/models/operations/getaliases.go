package operations

import (
	"openapi/pkg/models/shared"
)

type GetAliasesQueryParams struct {
	ContinueFrom *string `queryParam:"style=form,explode=true,name=continueFrom"`
	DomainName   *string `queryParam:"style=form,explode=true,name=domainName"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type GetAliasesSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetAliasesRequest struct {
	QueryParams GetAliasesQueryParams
	Security    GetAliasesSecurity
}

type GetAliasesResponse struct {
	ContentType     string
	GetAliasesModel *shared.GetAliasesModel
	StatusCode      int64
}
