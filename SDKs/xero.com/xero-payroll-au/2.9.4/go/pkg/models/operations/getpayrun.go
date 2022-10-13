package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayRunPathParams struct {
	PayRunID string `pathParam:"style=simple,explode=false,name=PayRunID"`
}

type GetPayRunHeaders struct {
	XeroTenantID string `header:"name=Xero-Tenant-Id"`
}

type GetPayRunSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetPayRunRequest struct {
	PathParams GetPayRunPathParams
	Headers    GetPayRunHeaders
	Security   GetPayRunSecurity
}

type GetPayRunResponse struct {
	ContentType string
	PayRuns     *shared.PayRuns
	StatusCode  int64
}
