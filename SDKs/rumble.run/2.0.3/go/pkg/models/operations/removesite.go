package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveSitePathParams struct {
	SiteID string `pathParam:"style=simple,explode=false,name=site_id"`
}

type RemoveSiteSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type RemoveSiteRequest struct {
	PathParams RemoveSitePathParams
	Security   RemoveSiteSecurity
}

type RemoveSiteResponse struct {
	ContentType string
	StatusCode  int64
}
