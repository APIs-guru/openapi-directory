package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlertsAlertIDAttachmentsAttachmentIDPathParams struct {
	AlertID      string `pathParam:"style=simple,explode=false,name=alertId"`
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachmentId"`
}

type GetAlertsAlertIDAttachmentsAttachmentIDQueryParams struct {
	Height *int32 `queryParam:"style=form,explode=true,name=height"`
	Scale  *bool  `queryParam:"style=form,explode=true,name=scale"`
	Width  *int32 `queryParam:"style=form,explode=true,name=width"`
}

type GetAlertsAlertIDAttachmentsAttachmentIDRequest struct {
	PathParams  GetAlertsAlertIDAttachmentsAttachmentIDPathParams
	QueryParams GetAlertsAlertIDAttachmentsAttachmentIDQueryParams
}

type GetAlertsAlertIDAttachmentsAttachmentIDResponse struct {
	Body                                                                  []byte
	ContentType                                                           string
	ErrorResponseContent                                                  *shared.ErrorResponseContent
	GetAlertsAlertIDAttachmentsAttachmentID200ApplicationJSONBinaryString []byte
	GetAlertsAlertIDAttachmentsAttachmentID200TextJSONBinaryString        []byte
	GetAlertsAlertIDAttachmentsAttachmentID200TextPlainBinaryString       []byte
	StatusCode                                                            int64
}
