package shared

type ListGiftCardActivitiesResponse struct {
	Cursor             *string            `json:"cursor"`
	Errors             []Error            `json:"errors"`
	GiftCardActivities []GiftCardActivity `json:"gift_card_activities"`
}
