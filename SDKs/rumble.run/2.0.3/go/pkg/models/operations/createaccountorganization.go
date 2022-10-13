package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccountOrganizationSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type CreateAccountOrganizationRequest struct {
	Request  shared.OrgOptions `request:"mediaType=application/json"`
	Security CreateAccountOrganizationSecurity
}

type CreateAccountOrganizationResponse struct {
	ContentType  string
	Organization *shared.Organization
	StatusCode   int64
}
