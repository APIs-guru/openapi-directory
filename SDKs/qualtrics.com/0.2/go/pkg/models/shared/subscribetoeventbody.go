package shared

type SubscribeToEventBody struct {
	Encrypt        *bool  `json:"encrypt"`
	PublicationURL string `json:"publicationUrl"`
	Topics         string `json:"topics"`
}
