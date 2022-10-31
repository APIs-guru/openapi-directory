package shared




type WebhookCreateEventsEnum string

const (
    WebhookCreateEventsEnumCall WebhookCreateEventsEnum = "CALL"
)



type WebhookCreateMetadataPolicyEnum string

const (
    WebhookCreateMetadataPolicyEnumNone WebhookCreateMetadataPolicyEnum = "NONE"
WebhookCreateMetadataPolicyEnumHeader WebhookCreateMetadataPolicyEnum = "HEADER"
WebhookCreateMetadataPolicyEnumBody WebhookCreateMetadataPolicyEnum = "BODY"
)



type WebhookCreateSigningAlgoEnum string

const (
    WebhookCreateSigningAlgoEnumHmacSha256 WebhookCreateSigningAlgoEnum = "HMAC_SHA256"
)


type WebhookCreate struct {
    Events []WebhookCreateEventsEnum `json:"events,omitempty"`
    MetadataPolicy *WebhookCreateMetadataPolicyEnum `json:"metadataPolicy,omitempty"`
    SigningAlgo *WebhookCreateSigningAlgoEnum `json:"signingAlgo,omitempty"`
    SigningKey *string `json:"signingKey,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

