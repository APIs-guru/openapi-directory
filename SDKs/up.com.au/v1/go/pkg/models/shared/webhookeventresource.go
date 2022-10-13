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
	Links *WebhookEventResourceRelationshipsTransactionLinks `json:"links"`
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
	Links *WebhookEventResourceRelationshipsWebhookLinks `json:"links"`
}

type WebhookEventResourceRelationships struct {
	Transaction *WebhookEventResourceRelationshipsTransaction `json:"transaction"`
	Webhook     WebhookEventResourceRelationshipsWebhook      `json:"webhook"`
}

type WebhookEventResource struct {
	Attributes    WebhookEventResourceAttributes    `json:"attributes"`
	ID            string                            `json:"id"`
	Relationships WebhookEventResourceRelationships `json:"relationships"`
	Type          string                            `json:"type"`
}
