package shared

import (
	"time"
)

// WebhookDeliveryLogResourceAttributesRequest
// Information about the request that was sent to the webhook URL.
type WebhookDeliveryLogResourceAttributesRequest struct {
	Body string `json:"body"`
}

// WebhookDeliveryLogResourceAttributesResponse
// Information about the response that was received from the webhook URL.
type WebhookDeliveryLogResourceAttributesResponse struct {
	Body       string `json:"body"`
	StatusCode int64  `json:"statusCode"`
}

type WebhookDeliveryLogResourceAttributes struct {
	CreatedAt      time.Time                                    `json:"createdAt"`
	DeliveryStatus interface{}                                  `json:"deliveryStatus"`
	Request        WebhookDeliveryLogResourceAttributesRequest  `json:"request"`
	Response       WebhookDeliveryLogResourceAttributesResponse `json:"response"`
}

type WebhookDeliveryLogResourceRelationshipsWebhookEventData struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type WebhookDeliveryLogResourceRelationshipsWebhookEvent struct {
	Data WebhookDeliveryLogResourceRelationshipsWebhookEventData `json:"data"`
}

type WebhookDeliveryLogResourceRelationships struct {
	WebhookEvent WebhookDeliveryLogResourceRelationshipsWebhookEvent `json:"webhookEvent"`
}

// WebhookDeliveryLogResource
// Provides historical webhook event delivery information for analysis and
// debugging purposes.
type WebhookDeliveryLogResource struct {
	Attributes    WebhookDeliveryLogResourceAttributes    `json:"attributes"`
	ID            string                                  `json:"id"`
	Relationships WebhookDeliveryLogResourceRelationships `json:"relationships"`
	Type          string                                  `json:"type"`
}
