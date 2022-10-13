package operations

import (
	"openapi/pkg/models/shared"
)

type GetChangelogPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetChangelogSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type GetChangelogRequest struct {
	PathParams GetChangelogPathParams
	Security   GetChangelogSecurity
}

type GetChangelogResponse struct {
	ContentType string
	StatusCode  int64
}
