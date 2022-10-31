package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAliasQueryParams struct {
	AliasName  string  `queryParam:"style=form,explode=true,name=aliasName"`
	DomainName *string `queryParam:"style=form,explode=true,name=domainName"`
}

type DeleteAliasSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteAliasRequest struct {
	QueryParams DeleteAliasQueryParams
	Security    DeleteAliasSecurity
}

type DeleteAliasResponse struct {
	ContentType string
	StatusCode  int64
}
