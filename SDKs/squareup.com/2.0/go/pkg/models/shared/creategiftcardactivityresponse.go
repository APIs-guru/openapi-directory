package shared



type CreateGiftCardActivityResponse struct {
    Errors []Error `json:"errors,omitempty"`
    GiftCardActivity *GiftCardActivity `json:"gift_card_activity,omitempty"`
    
}

