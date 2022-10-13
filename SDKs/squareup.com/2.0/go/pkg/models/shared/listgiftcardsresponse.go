package shared

type ListGiftCardsResponse struct {
	Cursor    *string    `json:"cursor"`
	Errors    []Error    `json:"errors"`
	GiftCards []GiftCard `json:"gift_cards"`
}
