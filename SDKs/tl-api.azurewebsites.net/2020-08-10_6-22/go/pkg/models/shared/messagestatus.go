package shared

type MessageStatus struct {
	MessageID   *string      `json:"messageId"`
	ReferenceID *int32       `json:"referenceId"`
	Source      *interface{} `json:"source"`
	StatusID    *int32       `json:"statusId"`
	StatusText  *string      `json:"statusText"`
}
