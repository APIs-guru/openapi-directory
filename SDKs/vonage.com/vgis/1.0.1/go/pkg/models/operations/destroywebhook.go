package operations

import (
	"openapi/pkg/models/shared"
)

type DestroyWebhookPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DestroyWebhookRequest struct {
	PathParams DestroyWebhookPathParams
}

type DestroyWebhookResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
