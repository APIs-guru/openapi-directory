package shared



type CancelSubscriptionResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Subscription *Subscription `json:"subscription,omitempty"`
    
}

