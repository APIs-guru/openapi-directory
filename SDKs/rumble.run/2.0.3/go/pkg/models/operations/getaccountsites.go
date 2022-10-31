package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountSitesQueryParams struct {
	Search *string `queryParam:"style=form,explode=true,name=search"`
}

type GetAccountSitesSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountSitesRequest struct {
	QueryParams GetAccountSitesQueryParams
	Security    GetAccountSitesSecurity
}

type GetAccountSitesResponse struct {
	ContentType string
	Sites       []shared.Site
	StatusCode  int64
}
