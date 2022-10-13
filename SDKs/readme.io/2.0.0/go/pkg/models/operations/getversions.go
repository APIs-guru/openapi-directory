package operations

import (
	"openapi/pkg/models/shared"
)

type GetVersionsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=http,subtype=basic"`
}

type GetVersionsRequest struct {
	Security GetVersionsSecurity
}

type GetVersionsResponse struct {
	ContentType string
	StatusCode  int64
}
