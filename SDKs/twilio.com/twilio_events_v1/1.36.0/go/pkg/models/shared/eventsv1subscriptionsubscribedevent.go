package shared

type EventsV1SubscriptionSubscribedEvent struct {
	AccountSid      *string `json:"account_sid,omitempty"`
	SchemaVersion   *int64  `json:"schema_version,omitempty"`
	SubscriptionSid *string `json:"subscription_sid,omitempty"`
	Type            *string `json:"type,omitempty"`
	URL             *string `json:"url,omitempty"`
}
