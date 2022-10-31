package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStatementsHeaders struct {
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type CreateStatementsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateStatementsRequest struct {
	Headers  CreateStatementsHeaders
	Request  *shared.Statements `request:"mediaType=application/json"`
	Security CreateStatementsSecurity
}

type CreateStatementsResponse struct {
	ContentType string
	Error       *shared.Error
	Statements  *shared.Statements
	StatusCode  int64
}
