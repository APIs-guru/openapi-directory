package shared



type UpdateSubscriptionResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Subscription *Subscription `json:"subscription,omitempty"`
    
}

