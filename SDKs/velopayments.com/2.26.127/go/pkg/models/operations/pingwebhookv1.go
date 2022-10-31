package operations

import (
	"openapi/pkg/models/shared"
)

type PingWebhookV1PathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type PingWebhookV1Request struct {
	PathParams PingWebhookV1PathParams
}

type PingWebhookV1Response struct {
	ContentType       string
	PingResponse      *shared.PingResponse
	StatusCode        int64
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
