package shared

type TeamInfo struct {
	ID             *string  `json:"id,omitempty"`
	MemberIds      []string `json:"memberIds,omitempty"`
	Name           *string  `json:"name,omitempty"`
	SubscriptionID *string  `json:"subscriptionId,omitempty"`
	Timezone       *string  `json:"timezone,omitempty"`
}
