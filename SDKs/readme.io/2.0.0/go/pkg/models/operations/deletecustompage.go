package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomPagePathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type DeleteCustomPageSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type DeleteCustomPageRequest struct {
	PathParams DeleteCustomPagePathParams
	Security   DeleteCustomPageSecurity
}

type DeleteCustomPageResponse struct {
	ContentType string
	StatusCode  int64
}
