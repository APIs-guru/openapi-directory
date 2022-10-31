package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllCompanyCodesAndDescriptionsByResourcePathParams struct {
	CodeResource string `pathParam:"style=simple,explode=false,name=codeResource"`
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetAllCompanyCodesAndDescriptionsByResourceSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type GetAllCompanyCodesAndDescriptionsByResourceRequest struct {
	PathParams GetAllCompanyCodesAndDescriptionsByResourcePathParams
	Security   GetAllCompanyCodesAndDescriptionsByResourceSecurity
}

type GetAllCompanyCodesAndDescriptionsByResourceResponse struct {
	ContentType  string
	StatusCode   int64
	CompanyCodes []shared.CompanyCodes
	Errors       []shared.Error
}
