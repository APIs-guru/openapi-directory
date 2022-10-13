package shared

type ResumeSubscriptionResponse struct {
	Errors       []Error       `json:"errors"`
	Subscription *Subscription `json:"subscription"`
}
