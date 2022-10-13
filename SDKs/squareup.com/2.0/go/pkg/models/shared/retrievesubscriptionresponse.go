package shared

type RetrieveSubscriptionResponse struct {
	Errors       []Error       `json:"errors"`
	Subscription *Subscription `json:"subscription"`
}
