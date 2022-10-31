package shared



type ListWebhooksResponseLinks struct {
    Next string `json:"next"`
    Prev string `json:"prev"`
    
}

type ListWebhooksResponse struct {
    Data []WebhookResource `json:"data"`
    Links ListWebhooksResponseLinks `json:"links"`
    
}

