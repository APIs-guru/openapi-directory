package operations

import (
	"openapi/pkg/models/shared"
)

type GetContinuousCheckPathParams struct {
	ContinuousCheckID float64 `pathParam:"style=simple,explode=false,name=continuous_check_id"`
}

type GetContinuousCheckSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetContinuousCheckRequest struct {
	PathParams GetContinuousCheckPathParams
	Security   GetContinuousCheckSecurity
}

type GetContinuousCheckResponse struct {
	ContentType     string
	ContinuousCheck *shared.ContinuousCheck
	StatusCode      int64
}
