package shared

// StatusDto
// Imideate response for long running api call.
type StatusDto struct {
	MessageID  *string `json:"messageId,omitempty"`
	StatusText *string `json:"statusText,omitempty"`
	URL        *string `json:"url,omitempty"`
}
