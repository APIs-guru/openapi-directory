package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoryPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetCategoryHeaders struct {
	XReadmeVersion string `header:"name=x-readme-version"`
}

type GetCategorySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type GetCategoryRequest struct {
	PathParams GetCategoryPathParams
	Headers    GetCategoryHeaders
	Security   GetCategorySecurity
}

type GetCategoryResponse struct {
	ContentType string
	StatusCode  int64
}
