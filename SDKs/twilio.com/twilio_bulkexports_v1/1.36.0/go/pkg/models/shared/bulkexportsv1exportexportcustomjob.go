package shared



type BulkexportsV1ExportExportCustomJob struct {
    Details *interface{} `json:"details,omitempty"`
    Email *string `json:"email,omitempty"`
    EndDay *string `json:"end_day,omitempty"`
    EstimatedCompletionTime *string `json:"estimated_completion_time,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    JobQueuePosition *string `json:"job_queue_position,omitempty"`
    JobSid *string `json:"job_sid,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    StartDay *string `json:"start_day,omitempty"`
    WebhookMethod *string `json:"webhook_method,omitempty"`
    WebhookURL *string `json:"webhook_url,omitempty"`
    
}

