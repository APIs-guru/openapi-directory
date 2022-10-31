package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDocPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type DeleteDocHeaders struct {
	XReadmeVersion string `header:"style=simple,explode=false,name=x-readme-version"`
}

type DeleteDocSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type DeleteDocRequest struct {
	PathParams DeleteDocPathParams
	Headers    DeleteDocHeaders
	Security   DeleteDocSecurity
}

type DeleteDocResponse struct {
	ContentType string
	StatusCode  int64
}
