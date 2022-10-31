package shared



type Notification struct {
    Always *bool `json:"always,omitempty"`
    Attributes map[string]interface{} `json:"attributes,omitempty"`
    CalendarID *int64 `json:"calendarId,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Mail *bool `json:"mail,omitempty"`
    Sms *bool `json:"sms,omitempty"`
    Type *string `json:"type,omitempty"`
    Web *bool `json:"web,omitempty"`
    
}

