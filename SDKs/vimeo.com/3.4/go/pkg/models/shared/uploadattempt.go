package shared

type UploadAttempt struct {
	Clip        *Video  `json:"clip,omitempty"`
	CompleteURI *string `json:"complete_uri,omitempty"`
	Form        *string `json:"form,omitempty"`
	TicketID    string  `json:"ticket_id"`
	UploadLink  string  `json:"upload_link"`
	URI         string  `json:"uri"`
	User        User    `json:"user"`
}
