package shared

type ListGiftCardsResponse struct {
	Cursor    *string    `json:"cursor,omitempty"`
	Errors    []Error    `json:"errors,omitempty"`
	GiftCards []GiftCard `json:"gift_cards,omitempty"`
}
