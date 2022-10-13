package shared

type CreateSubscriptionResponse struct {
	Errors       []Error       `json:"errors"`
	Subscription *Subscription `json:"subscription"`
}
