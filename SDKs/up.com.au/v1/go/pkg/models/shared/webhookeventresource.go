package shared

import (
	"time"
)

type WebhookEventResourceAttributes struct {
	CreatedAt time.Time   `json:"createdAt"`
	EventType interface{} `json:"eventType"`
}

type WebhookEventResourceRelationshipsTransactionData struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type WebhookEventResourceRelationshipsTransactionLinks struct {
	Related string `json:"related"`
}

type WebhookEventResourceRelationshipsTransaction struct {
	Data  WebhookEventResourceRelationshipsTransactionData   `json:"data"`
	Links *WebhookEventResourceRelationshipsTransactionLinks `json:"links,omitempty"`
}

type WebhookEventResourceRelationshipsWebhookData struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type WebhookEventResourceRelationshipsWebhookLinks struct {
	Related string `json:"related"`
}

type WebhookEventResourceRelationshipsWebhook struct {
	Data  WebhookEventResourceRelationshipsWebhookData   `json:"data"`
	Links *WebhookEventResourceRelationshipsWebhookLinks `json:"links,omitempty"`
}

type WebhookEventResourceRelationships struct {
	Transaction *WebhookEventResourceRelationshipsTransaction `json:"transaction,omitempty"`
	Webhook     WebhookEventResourceRelationshipsWebhook      `json:"webhook"`
}

// WebhookEventResource
// Provides the event data used in asynchronous webhook event callbacks to
// subscribed endpoints. Webhooks events have defined `eventType`s and may
// optionally relate to other resources within the Up API.
type WebhookEventResource struct {
	Attributes    WebhookEventResourceAttributes    `json:"attributes"`
	ID            string                            `json:"id"`
	Relationships WebhookEventResourceRelationships `json:"relationships"`
	Type          string                            `json:"type"`
}
