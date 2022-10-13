package shared

type WebhookCreateEventsEnum string

const (
	WebhookCreateEventsEnumCall WebhookCreateEventsEnum = "CALL"
)

type WebhookCreateMetadataPolicyEnum string

const (
	WebhookCreateMetadataPolicyEnumNone   WebhookCreateMetadataPolicyEnum = "NONE"
	WebhookCreateMetadataPolicyEnumHeader WebhookCreateMetadataPolicyEnum = "HEADER"
	WebhookCreateMetadataPolicyEnumBody   WebhookCreateMetadataPolicyEnum = "BODY"
)

type WebhookCreateSigningAlgoEnum string

const (
	WebhookCreateSigningAlgoEnumHmacSha256 WebhookCreateSigningAlgoEnum = "HMAC_SHA256"
)

type WebhookCreate struct {
	Events         []WebhookCreateEventsEnum        `json:"events"`
	MetadataPolicy *WebhookCreateMetadataPolicyEnum `json:"metadataPolicy"`
	SigningAlgo    *WebhookCreateSigningAlgoEnum    `json:"signingAlgo"`
	SigningKey     *string                          `json:"signingKey"`
	URL            *string                          `json:"url"`
}
