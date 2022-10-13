package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContinuousCheckPathParams struct {
	ContinuousCheckID float64 `pathParam:"style=simple,explode=false,name=continuous_check_id"`
}

type UpdateContinuousCheckSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateContinuousCheckRequest struct {
	PathParams UpdateContinuousCheckPathParams
	Request    shared.UpdateContinuousCheckInput `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateContinuousCheckSecurity
}

type UpdateContinuousCheckResponse struct {
	ContentType     string
	ContinuousCheck *shared.ContinuousCheck
	StatusCode      int64
}
