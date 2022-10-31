package shared



type CreateSubscriptionResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Subscription *Subscription `json:"subscription,omitempty"`
    
}

