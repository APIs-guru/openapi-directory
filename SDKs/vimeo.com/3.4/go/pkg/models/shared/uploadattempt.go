package shared

type UploadAttempt struct {
	Clip        *Video  `json:"clip"`
	CompleteURI *string `json:"complete_uri"`
	Form        *string `json:"form"`
	TicketID    string  `json:"ticket_id"`
	UploadLink  string  `json:"upload_link"`
	URI         string  `json:"uri"`
	User        User    `json:"user"`
}
