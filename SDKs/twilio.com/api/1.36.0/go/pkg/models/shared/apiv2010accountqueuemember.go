package shared



type APIV2010AccountQueueMember struct {
    CallSid *string `json:"call_sid,omitempty"`
    DateEnqueued *string `json:"date_enqueued,omitempty"`
    Position *int64 `json:"position,omitempty"`
    QueueSid *string `json:"queue_sid,omitempty"`
    URI *string `json:"uri,omitempty"`
    WaitTime *int64 `json:"wait_time,omitempty"`
    
}

