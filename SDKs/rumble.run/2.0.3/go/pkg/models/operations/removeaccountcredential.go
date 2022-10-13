package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveAccountCredentialPathParams struct {
	CredentialID string `pathParam:"style=simple,explode=false,name=credential_id"`
}

type RemoveAccountCredentialSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type RemoveAccountCredentialRequest struct {
	PathParams RemoveAccountCredentialPathParams
	Security   RemoveAccountCredentialSecurity
}

type RemoveAccountCredentialResponse struct {
	ContentType string
	StatusCode  int64
}
