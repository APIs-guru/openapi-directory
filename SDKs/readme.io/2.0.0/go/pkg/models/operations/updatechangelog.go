package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateChangelogPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type UpdateChangelogSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type UpdateChangelogRequest struct {
	PathParams UpdateChangelogPathParams
	Request    shared.Changelog `request:"mediaType=application/json"`
	Security   UpdateChangelogSecurity
}

type UpdateChangelogResponse struct {
	ContentType string
	StatusCode  int64
}
