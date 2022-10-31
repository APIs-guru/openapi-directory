package shared



type RetrieveGiftCardFromNonceResponse struct {
    Errors []Error `json:"errors,omitempty"`
    GiftCard *GiftCard `json:"gift_card,omitempty"`
    
}

