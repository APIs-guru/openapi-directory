package shared

type CancelSubscriptionResponse struct {
	Errors       []Error       `json:"errors"`
	Subscription *Subscription `json:"subscription"`
}
