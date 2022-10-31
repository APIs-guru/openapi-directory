package operations

import (
	"openapi/pkg/models/shared"
)

type GetV1ContinuousChecksContinuousCheckIDHistoryPathParams struct {
	ContinuousCheckID string `pathParam:"style=simple,explode=false,name=continuous_check_id"`
}

type GetV1ContinuousChecksContinuousCheckIDHistorySecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetV1ContinuousChecksContinuousCheckIDHistoryRequest struct {
	PathParams GetV1ContinuousChecksContinuousCheckIDHistoryPathParams
	Security   GetV1ContinuousChecksContinuousCheckIDHistorySecurity
}

type GetV1ContinuousChecksContinuousCheckIDHistoryResponse struct {
	ContentType                    string
	GetContiuousCheckHistoryOutput *shared.GetContiuousCheckHistoryOutput
	StatusCode                     int64
}
