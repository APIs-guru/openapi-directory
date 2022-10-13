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
	Failed         *bool  `json:"failed"`
	TotalAttempts  *int64 `json:"totalAttempts"`
	TotalFailures  *int64 `json:"totalFailures"`
	TotalSuccesses *int64 `json:"totalSuccesses"`
}

type WebhookStatusEnum string

const (
	WebhookStatusEnumActive WebhookStatusEnum = "ACTIVE"
	WebhookStatusEnumPaused WebhookStatusEnum = "PAUSED"
)

type Webhook struct {
	AccountID      *string                    `json:"accountId"`
	CreatedAt      *string                    `json:"createdAt"`
	Events         []WebhookEventsEnum        `json:"events"`
	ExpireAt       *string                    `json:"expireAt"`
	ID             *string                    `json:"id"`
	MetadataPolicy *WebhookMetadataPolicyEnum `json:"metadataPolicy"`
	PurgeAt        *string                    `json:"purgeAt"`
	RenewedAt      *string                    `json:"renewedAt"`
	SigningAlgo    *WebhookSigningAlgoEnum    `json:"signingAlgo"`
	SigningKey     *string                    `json:"signingKey"`
	Statistics     *WebhookStatistics         `json:"statistics"`
	Status         *WebhookStatusEnum         `json:"status"`
	URL            *string                    `json:"url"`
	UserID         *string                    `json:"userId"`
}
