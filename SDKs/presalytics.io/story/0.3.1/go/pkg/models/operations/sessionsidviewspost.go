package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SessionsIDViewsPostPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=session_id"`
}

type SessionsIDViewsPostRequestBodyRequiredParametersToCreateAView struct {
	ActiveMSecs *int64    `json:"activeMSecs,omitempty"`
	Additional  *string   `json:"additional,omitempty"`
	EndTime     time.Time `json:"endTime"`
	PageNumber  int64     `json:"pageNumber"`
	StartTime   time.Time `json:"startTime"`
}

type SessionsIDViewsPostRequest struct {
	PathParams SessionsIDViewsPostPathParams
	Request    SessionsIDViewsPostRequestBodyRequiredParametersToCreateAView `request:"mediaType=application/json"`
}

type SessionsIDViewsPostResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
	View          *shared.View
}
