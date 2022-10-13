package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePayslipPathParams struct {
	PayslipID string `pathParam:"style=simple,explode=false,name=PayslipID"`
}

type UpdatePayslipHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type UpdatePayslipSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdatePayslipRequest struct {
	PathParams UpdatePayslipPathParams
	Headers    UpdatePayslipHeaders
	Request    []shared.PayslipLines `request:"mediaType=application/json"`
	Security   UpdatePayslipSecurity
}

type UpdatePayslipResponse struct {
	ContentType string
	Payslips    *shared.Payslips
	StatusCode  int64
}
