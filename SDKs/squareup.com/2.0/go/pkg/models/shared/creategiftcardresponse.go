package shared



type CreateGiftCardResponse struct {
    Errors []Error `json:"errors,omitempty"`
    GiftCard *GiftCard `json:"gift_card,omitempty"`
    
}

