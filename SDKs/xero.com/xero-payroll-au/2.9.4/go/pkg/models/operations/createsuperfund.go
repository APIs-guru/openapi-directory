package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSuperfundHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type CreateSuperfundSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateSuperfundRequest struct {
	Headers  CreateSuperfundHeaders
	Request  []shared.SuperFund `request:"mediaType=application/json"`
	Security CreateSuperfundSecurity
}

type CreateSuperfundResponse struct {
	ContentType string
	StatusCode  int64
	SuperFunds  *shared.SuperFunds
}
