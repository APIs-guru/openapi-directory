package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetDocHeaders struct {
	XReadmeVersion string `header:"name=x-readme-version"`
}

type GetDocSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type GetDocRequest struct {
	PathParams GetDocPathParams
	Headers    GetDocHeaders
	Security   GetDocSecurity
}

type GetDocResponse struct {
	ContentType string
	StatusCode  int64
}
