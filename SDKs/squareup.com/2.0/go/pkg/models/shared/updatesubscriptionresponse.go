package shared

type UpdateSubscriptionResponse struct {
	Errors       []Error       `json:"errors"`
	Subscription *Subscription `json:"subscription"`
}
