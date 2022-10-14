package shared

type ListGiftCardActivitiesResponse struct {
	Cursor             *string            `json:"cursor,omitempty"`
	Errors             []Error            `json:"errors,omitempty"`
	GiftCardActivities []GiftCardActivity `json:"gift_card_activities,omitempty"`
}
