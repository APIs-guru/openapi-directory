package shared

import (
	"time"
)

type WebhookResourceAttributes struct {
	CreatedAt   time.Time `json:"createdAt"`
	Description string    `json:"description"`
	SecretKey   *string   `json:"secretKey"`
	URL         string    `json:"url"`
}

type WebhookResourceLinks struct {
	Self string `json:"self"`
}

type WebhookResourceRelationshipsLogsLinks struct {
	Related string `json:"related"`
}

type WebhookResourceRelationshipsLogs struct {
	Links *WebhookResourceRelationshipsLogsLinks `json:"links"`
}

type WebhookResourceRelationships struct {
	Logs WebhookResourceRelationshipsLogs `json:"logs"`
}

type WebhookResource struct {
	Attributes    WebhookResourceAttributes    `json:"attributes"`
	ID            string                       `json:"id"`
	Links         *WebhookResourceLinks        `json:"links"`
	Relationships WebhookResourceRelationships `json:"relationships"`
	Type          string                       `json:"type"`
}
