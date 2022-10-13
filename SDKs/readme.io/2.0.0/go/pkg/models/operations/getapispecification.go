package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPISpecificationQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=perPage"`
}

type GetAPISpecificationHeaders struct {
	XReadmeVersion string `header:"name=x-readme-version"`
}

type GetAPISpecificationSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type GetAPISpecificationRequest struct {
	QueryParams GetAPISpecificationQueryParams
	Headers     GetAPISpecificationHeaders
	Security    GetAPISpecificationSecurity
}

type GetAPISpecificationResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
