package shared

type EventsV1SubscriptionSubscribedEvent struct {
	AccountSid      *string `json:"account_sid"`
	SchemaVersion   *int64  `json:"schema_version"`
	SubscriptionSid *string `json:"subscription_sid"`
	Type            *string `json:"type"`
	URL             *string `json:"url"`
}
