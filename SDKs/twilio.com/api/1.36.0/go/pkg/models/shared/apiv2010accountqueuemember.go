package shared

type APIV2010AccountQueueMember struct {
	CallSid      *string `json:"call_sid"`
	DateEnqueued *string `json:"date_enqueued"`
	Position     *int64  `json:"position"`
	QueueSid     *string `json:"queue_sid"`
	URI          *string `json:"uri"`
	WaitTime     *int64  `json:"wait_time"`
}
