package operations

import (
	"openapi/pkg/models/shared"
)

type GetAliasQueryParams struct {
	AliasName  string  `queryParam:"style=form,explode=true,name=aliasName"`
	DomainName *string `queryParam:"style=form,explode=true,name=domainName"`
}

type GetAliasSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetAliasRequest struct {
	QueryParams GetAliasQueryParams
	Security    GetAliasSecurity
}

type GetAliasResponse struct {
	AliasModel  *shared.AliasModel
	ContentType string
	StatusCode  int64
}
