package shared

type SubscribeToEventBody struct {
	Encrypt        *bool  `json:"encrypt,omitempty"`
	PublicationURL string `json:"publicationUrl"`
	Topics         string `json:"topics"`
}
