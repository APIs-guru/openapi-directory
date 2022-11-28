package shared

type ListWebhooksResponseLinks struct {
	Next string `json:"next"`
	Prev string `json:"prev"`
}

// ListWebhooksResponse
// Successful response to get all webhooks. This returns a paginated list of
// webhooks, which can be scrolled by following the `prev` and `next` links
// if present.
type ListWebhooksResponse struct {
	Data  []WebhookResource         `json:"data"`
	Links ListWebhooksResponseLinks `json:"links"`
}
