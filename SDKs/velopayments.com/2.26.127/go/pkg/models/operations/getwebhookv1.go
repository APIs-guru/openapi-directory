package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhookV1PathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type GetWebhookV1Request struct {
	PathParams GetWebhookV1PathParams
}

type GetWebhookV1Response struct {
	ContentType       string
	StatusCode        int64
	WebhookResponse   *shared.WebhookResponse
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
