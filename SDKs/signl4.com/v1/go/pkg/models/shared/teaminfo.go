package shared

type TeamInfo struct {
	ID             *string  `json:"id"`
	MemberIds      []string `json:"memberIds"`
	Name           *string  `json:"name"`
	SubscriptionID *string  `json:"subscriptionId"`
	Timezone       *string  `json:"timezone"`
}
