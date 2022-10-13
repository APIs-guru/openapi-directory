package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlertsAlertIDPathParams struct {
	AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
}

type GetAlertsAlertIDRequest struct {
	PathParams GetAlertsAlertIDPathParams
}

type GetAlertsAlertIDResponse struct {
	AlertInfo            *shared.AlertInfo
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
