package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountOrganizationExportTokenPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=org_id"`
}

type DeleteAccountOrganizationExportTokenSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteAccountOrganizationExportTokenRequest struct {
	PathParams DeleteAccountOrganizationExportTokenPathParams
	Security   DeleteAccountOrganizationExportTokenSecurity
}

type DeleteAccountOrganizationExportTokenResponse struct {
	ContentType string
	StatusCode  int64
}
