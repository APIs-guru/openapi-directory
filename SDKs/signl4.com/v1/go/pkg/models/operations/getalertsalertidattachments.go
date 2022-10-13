package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlertsAlertIDAttachmentsPathParams struct {
	AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
}

type GetAlertsAlertIDAttachmentsRequest struct {
	PathParams GetAlertsAlertIDAttachmentsPathParams
}

type GetAlertsAlertIDAttachmentsResponse struct {
	AlertAttachmentInfos []shared.AlertAttachmentInfo
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
