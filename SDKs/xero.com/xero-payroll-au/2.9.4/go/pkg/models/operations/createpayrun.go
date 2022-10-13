package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePayRunHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type CreatePayRunSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreatePayRunRequest struct {
	Headers  CreatePayRunHeaders
	Request  []shared.PayRun `request:"mediaType=application/json"`
	Security CreatePayRunSecurity
}

type CreatePayRunResponse struct {
	ContentType string
	PayRuns     *shared.PayRuns
	StatusCode  int64
}
