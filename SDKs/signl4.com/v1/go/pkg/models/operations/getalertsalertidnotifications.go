package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlertsAlertIDNotificationsPathParams struct {
	AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
}

type GetAlertsAlertIDNotificationsRequest struct {
	PathParams GetAlertsAlertIDNotificationsPathParams
}

type GetAlertsAlertIDNotificationsResponse struct {
	AlertNotificationInfos []shared.AlertNotificationInfo
	Body                   []byte
	ContentType            string
	ErrorResponseContent   *shared.ErrorResponseContent
	StatusCode             int64
}
