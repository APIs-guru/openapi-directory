package shared



type EventDates struct {
    Access *AccessDates `json:"access,omitempty"`
    End *EndDates `json:"end,omitempty"`
    Start *StartDates `json:"start,omitempty"`
    Status *EventStatus `json:"status,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    
}

