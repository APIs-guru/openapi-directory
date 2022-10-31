package shared

type SubscriptionEvent struct {
	EffectiveDate         string       `json:"effective_date"`
	ID                    string       `json:"id"`
	Info                  *interface{} `json:"info,omitempty"`
	PlanID                string       `json:"plan_id"`
	SubscriptionEventType string       `json:"subscription_event_type"`
}
