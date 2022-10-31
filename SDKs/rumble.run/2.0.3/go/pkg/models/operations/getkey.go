package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeySecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetKeyRequest struct {
	Security GetKeySecurity
}

type GetKeyResponse struct {
	APIKey      *shared.APIKey
	ContentType string
	StatusCode  int64
}
