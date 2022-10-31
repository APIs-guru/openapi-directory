package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoryDocsPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetCategoryDocsHeaders struct {
	XReadmeVersion string `header:"style=simple,explode=false,name=x-readme-version"`
}

type GetCategoryDocsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type GetCategoryDocsRequest struct {
	PathParams GetCategoryDocsPathParams
	Headers    GetCategoryDocsHeaders
	Security   GetCategoryDocsSecurity
}

type GetCategoryDocsResponse struct {
	ContentType string
	StatusCode  int64
}
