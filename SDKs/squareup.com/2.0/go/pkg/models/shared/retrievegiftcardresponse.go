package shared



type RetrieveGiftCardResponse struct {
    Errors []Error `json:"errors,omitempty"`
    GiftCard *GiftCard `json:"gift_card,omitempty"`
    
}

