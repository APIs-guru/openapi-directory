package shared

type WebhookEventsEnum string

const (
	WebhookEventsEnumCall WebhookEventsEnum = "CALL"
)

type WebhookMetadataPolicyEnum string

const (
	WebhookMetadataPolicyEnumNone   WebhookMetadataPolicyEnum = "NONE"
	WebhookMetadataPolicyEnumHeader WebhookMetadataPolicyEnum = "HEADER"
	WebhookMetadataPolicyEnumBody   WebhookMetadataPolicyEnum = "BODY"
)

type WebhookSigningAlgoEnum string

const (
	WebhookSigningAlgoEnumHmacSha256 WebhookSigningAlgoEnum = "HMAC_SHA256"
	WebhookSigningAlgoEnumNone       WebhookSigningAlgoEnum = "NONE"
)

type WebhookStatistics struct {
	Failed         *bool  `json:"failed,omitempty"`
	TotalAttempts  *int64 `json:"totalAttempts,omitempty"`
	TotalFailures  *int64 `json:"totalFailures,omitempty"`
	TotalSuccesses *int64 `json:"totalSuccesses,omitempty"`
}

type WebhookStatusEnum string

const (
	WebhookStatusEnumActive WebhookStatusEnum = "ACTIVE"
	WebhookStatusEnumPaused WebhookStatusEnum = "PAUSED"
)

type Webhook struct {
	AccountID      *string                    `json:"accountId,omitempty"`
	CreatedAt      *string                    `json:"createdAt,omitempty"`
	Events         []WebhookEventsEnum        `json:"events,omitempty"`
	ExpireAt       *string                    `json:"expireAt,omitempty"`
	ID             *string                    `json:"id,omitempty"`
	MetadataPolicy *WebhookMetadataPolicyEnum `json:"metadataPolicy,omitempty"`
	PurgeAt        *string                    `json:"purgeAt,omitempty"`
	RenewedAt      *string                    `json:"renewedAt,omitempty"`
	SigningAlgo    *WebhookSigningAlgoEnum    `json:"signingAlgo,omitempty"`
	SigningKey     *string                    `json:"signingKey,omitempty"`
	Statistics     *WebhookStatistics         `json:"statistics,omitempty"`
	Status         *WebhookStatusEnum         `json:"status,omitempty"`
	URL            *string                    `json:"url,omitempty"`
	UserID         *string                    `json:"userId,omitempty"`
}
