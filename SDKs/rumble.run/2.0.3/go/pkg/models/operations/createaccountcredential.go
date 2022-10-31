package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAccountCredentialSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type CreateAccountCredentialRequest struct {
	Request  shared.CredentialOptions `request:"mediaType=application/json"`
	Security CreateAccountCredentialSecurity
}

type CreateAccountCredentialResponse struct {
	ContentType string
	Credential  *shared.Credential
	StatusCode  int64
}
