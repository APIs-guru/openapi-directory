package shared

type BulkexportsV1ExportExportCustomJob struct {
	Details                 *interface{} `json:"details"`
	Email                   *string      `json:"email"`
	EndDay                  *string      `json:"end_day"`
	EstimatedCompletionTime *string      `json:"estimated_completion_time"`
	FriendlyName            *string      `json:"friendly_name"`
	JobQueuePosition        *string      `json:"job_queue_position"`
	JobSid                  *string      `json:"job_sid"`
	ResourceType            *string      `json:"resource_type"`
	StartDay                *string      `json:"start_day"`
	WebhookMethod           *string      `json:"webhook_method"`
	WebhookURL              *string      `json:"webhook_url"`
}
