package operations

import (
	"openapi/pkg/models/shared"
)

type PostWebhooksWebhookIDDisablePathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type PostWebhooksWebhookIDDisableRequest struct {
	PathParams PostWebhooksWebhookIDDisablePathParams
}

type PostWebhooksWebhookIDDisableResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	WebhookInfo          *shared.WebhookInfo
}
