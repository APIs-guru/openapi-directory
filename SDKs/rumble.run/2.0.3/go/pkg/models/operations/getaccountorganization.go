package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountOrganizationPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=org_id"`
}

type GetAccountOrganizationSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountOrganizationRequest struct {
	PathParams GetAccountOrganizationPathParams
	Security   GetAccountOrganizationSecurity
}

type GetAccountOrganizationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
