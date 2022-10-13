package operations

import (
	"openapi/pkg/models/shared"
)

type GetSitesSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetSitesRequest struct {
	Security GetSitesSecurity
}

type GetSitesResponse struct {
	ContentType string
	Sites       []shared.Site
	StatusCode  int64
}
