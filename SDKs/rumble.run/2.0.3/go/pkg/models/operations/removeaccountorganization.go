package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAccountOrganizationPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=org_id"`
}

type RemoveAccountOrganizationSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type RemoveAccountOrganizationRequest struct {
	PathParams RemoveAccountOrganizationPathParams
	Security   RemoveAccountOrganizationSecurity
}

type RemoveAccountOrganizationResponse struct {
	ContentType string
	StatusCode  int64
}
