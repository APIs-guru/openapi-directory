package shared



type ResumeSubscriptionResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Subscription *Subscription `json:"subscription,omitempty"`
    
}

