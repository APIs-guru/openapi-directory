package operations

import (
	"openapi/pkg/models/shared"
)

type PostWebhooksWebhookIDEnablePathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type PostWebhooksWebhookIDEnableRequest struct {
	PathParams PostWebhooksWebhookIDEnablePathParams
}

type PostWebhooksWebhookIDEnableResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	WebhookInfo          *shared.WebhookInfo
}
