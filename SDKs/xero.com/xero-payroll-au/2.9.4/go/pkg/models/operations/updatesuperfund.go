package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSuperfundPathParams struct {
	SuperFundID string `pathParam:"style=simple,explode=false,name=SuperFundID"`
}

type UpdateSuperfundHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type UpdateSuperfundSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateSuperfundRequest struct {
	PathParams UpdateSuperfundPathParams
	Headers    UpdateSuperfundHeaders
	Request    []shared.SuperFund `request:"mediaType=application/json"`
	Security   UpdateSuperfundSecurity
}

type UpdateSuperfundResponse struct {
	ContentType string
	StatusCode  int64
	SuperFunds  *shared.SuperFunds
}
