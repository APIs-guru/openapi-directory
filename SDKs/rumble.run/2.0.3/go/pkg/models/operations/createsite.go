package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSiteSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type CreateSiteRequest struct {
	Request  shared.SiteOptions `request:"mediaType=application/json"`
	Security CreateSiteSecurity
}

type CreateSiteResponse struct {
	ContentType string
	Site        *shared.Site
	StatusCode  int64
}
