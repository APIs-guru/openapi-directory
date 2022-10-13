package shared

type ListWebhookDeliveryLogsResponseLinks struct {
	Next string `json:"next"`
	Prev string `json:"prev"`
}

type ListWebhookDeliveryLogsResponse struct {
	Data  []WebhookDeliveryLogResource         `json:"data"`
	Links ListWebhookDeliveryLogsResponseLinks `json:"links"`
}
