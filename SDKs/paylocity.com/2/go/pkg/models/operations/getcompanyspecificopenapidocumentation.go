package operations

import (
	"openapi/pkg/models/shared"
)

type GetCompanySpecificOpenAPIDocumentationPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompanySpecificOpenAPIDocumentationHeaders struct {
	Authorization string `header:"name=Authorization"`
}

type GetCompanySpecificOpenAPIDocumentationSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type GetCompanySpecificOpenAPIDocumentationRequest struct {
	PathParams GetCompanySpecificOpenAPIDocumentationPathParams
	Headers    GetCompanySpecificOpenAPIDocumentationHeaders
	Security   GetCompanySpecificOpenAPIDocumentationSecurity
}

type GetCompanySpecificOpenAPIDocumentationResponse struct {
	ContentType string
	StatusCode  int64
	Errors      []shared.Error
}
