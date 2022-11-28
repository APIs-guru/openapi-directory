package shared

type ListWebhookDeliveryLogsResponseLinks struct {
	Next string `json:"next"`
	Prev string `json:"prev"`
}

// ListWebhookDeliveryLogsResponse
// Successful response to get all delivery logs for a webhook. This returns
// a paginated list of delivery logs, which can be scrolled by following the
// `next` and `prev` links if present.
type ListWebhookDeliveryLogsResponse struct {
	Data  []WebhookDeliveryLogResource         `json:"data"`
	Links ListWebhookDeliveryLogsResponseLinks `json:"links"`
}
