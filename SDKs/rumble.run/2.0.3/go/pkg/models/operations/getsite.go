package operations

import (
	"openapi/pkg/models/shared"
)

type GetSitePathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=site_id"`
}

type GetSiteSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetSiteRequest struct {
	PathParams GetSitePathParams
	Security   GetSiteSecurity
}

type GetSiteResponse struct {
	ContentType string
	Site        *shared.Site
	StatusCode  int64
}
