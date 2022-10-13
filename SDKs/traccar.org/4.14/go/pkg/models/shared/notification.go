package shared

type Notification struct {
	Always     *bool                  `json:"always"`
	Attributes map[string]interface{} `json:"attributes"`
	CalendarID *int64                 `json:"calendarId"`
	ID         *int64                 `json:"id"`
	Mail       *bool                  `json:"mail"`
	Sms        *bool                  `json:"sms"`
	Type       *string                `json:"type"`
	Web        *bool                  `json:"web"`
}
