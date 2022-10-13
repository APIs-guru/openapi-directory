package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSitePathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=site_id"`
}

type UpdateSiteSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type UpdateSiteRequest struct {
	PathParams UpdateSitePathParams
	Request    shared.SiteOptions `request:"mediaType=application/json"`
	Security   UpdateSiteSecurity
}

type UpdateSiteResponse struct {
	ContentType string
	Site        *shared.Site
	StatusCode  int64
}
