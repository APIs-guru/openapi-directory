package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAliasQueryParams struct {
	AliasName  *string `queryParam:"style=form,explode=true,name=aliasName"`
	DomainName *string `queryParam:"style=form,explode=true,name=domainName"`
}

type CreateAliasSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type CreateAliasRequest struct {
	QueryParams CreateAliasQueryParams
	Request     shared.CreateAliasModel `request:"mediaType=application/json"`
	Security    CreateAliasSecurity
}

type CreateAliasResponse struct {
	ContentType              string
	CreateAliasResponseModel *shared.CreateAliasResponseModel
	StatusCode               int64
}
