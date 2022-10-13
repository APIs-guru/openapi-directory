package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRequest struct {
	Security DeleteSecurity
}

type DeleteResponse struct {
	ContentType string
	StatusCode  int64
}
