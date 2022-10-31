package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWebhookV1PathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
}

type UpdateWebhookV1Request struct {
	PathParams UpdateWebhookV1PathParams
	Request    *shared.UpdateWebhookRequest `request:"mediaType=application/json"`
}

type UpdateWebhookV1Response struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
