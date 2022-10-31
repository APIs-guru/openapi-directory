package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDocPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type UpdateDocHeaders struct {
	XReadmeVersion string `header:"style=simple,explode=false,name=x-readme-version"`
}

type UpdateDocSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type UpdateDocRequest struct {
	PathParams UpdateDocPathParams
	Headers    UpdateDocHeaders
	Request    shared.Doc `request:"mediaType=application/json"`
	Security   UpdateDocSecurity
}

type UpdateDocResponse struct {
	ContentType string
	StatusCode  int64
}
