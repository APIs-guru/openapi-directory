package shared

type StatusDto struct {
	MessageID  *string `json:"messageId"`
	StatusText *string `json:"statusText"`
	URL        *string `json:"url"`
}
