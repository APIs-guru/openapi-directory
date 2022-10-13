package operations

import (
	"openapi/pkg/models/shared"
)

type ViewWebhookPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ViewWebhookRequest struct {
	PathParams ViewWebhookPathParams
}

type ViewWebhookResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	Webhook       *shared.Webhook
}
