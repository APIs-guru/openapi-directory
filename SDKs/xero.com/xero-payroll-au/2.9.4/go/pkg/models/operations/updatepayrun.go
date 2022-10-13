package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePayRunPathParams struct {
	PayRunID string `pathParam:"style=simple,explode=false,name=PayRunID"`
}

type UpdatePayRunHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type UpdatePayRunSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdatePayRunRequest struct {
	PathParams UpdatePayRunPathParams
	Headers    UpdatePayRunHeaders
	Request    []shared.PayRun `request:"mediaType=application/json"`
	Security   UpdatePayRunSecurity
}

type UpdatePayRunResponse struct {
	ContentType string
	PayRuns     *shared.PayRuns
	StatusCode  int64
}
