package shared

import (
	"time"
)

type WebhookDeliveryLogResourceAttributesRequest struct {
	Body string `json:"body"`
}

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

type WebhookDeliveryLogResource struct {
	Attributes    WebhookDeliveryLogResourceAttributes    `json:"attributes"`
	ID            string                                  `json:"id"`
	Relationships WebhookDeliveryLogResourceRelationships `json:"relationships"`
	Type          string                                  `json:"type"`
}
