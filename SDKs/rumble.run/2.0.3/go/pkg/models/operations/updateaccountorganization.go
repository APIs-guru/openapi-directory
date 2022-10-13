package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountOrganizationPathParams struct {
	OrgID string `pathParam:"style=simple,explode=false,name=org_id"`
}

type UpdateAccountOrganizationSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type UpdateAccountOrganizationRequest struct {
	PathParams UpdateAccountOrganizationPathParams
	Request    shared.OrgOptions `request:"mediaType=application/json"`
	Security   UpdateAccountOrganizationSecurity
}

type UpdateAccountOrganizationResponse struct {
	ContentType  string
	Organization *shared.Organization
	StatusCode   int64
}
