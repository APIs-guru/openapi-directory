package operations

import (
	"openapi/pkg/models/shared"
)

type GetCheckPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=check_id"`
}

type GetCheckSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetCheckRequest struct {
	PathParams GetCheckPathParams
	Security   GetCheckSecurity
}

type GetCheckResponse struct {
	CheckOutput *shared.CheckOutput
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
