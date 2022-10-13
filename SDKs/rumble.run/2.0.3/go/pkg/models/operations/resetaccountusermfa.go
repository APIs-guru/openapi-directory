package operations

import (
	"openapi/pkg/models/shared"
)

type ResetAccountUserMfaPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type ResetAccountUserMfaSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type ResetAccountUserMfaRequest struct {
	PathParams ResetAccountUserMfaPathParams
	Security   ResetAccountUserMfaSecurity
}

type ResetAccountUserMfaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
