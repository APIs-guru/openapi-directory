package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountCredentialPathParams struct {
	CredentialID string `pathParam:"style=simple,explode=false,name=credential_id"`
}

type GetAccountCredentialSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountCredentialRequest struct {
	PathParams GetAccountCredentialPathParams
	Security   GetAccountCredentialSecurity
}

type GetAccountCredentialResponse struct {
	ContentType string
	Credential  *shared.Credential
	StatusCode  int64
}
