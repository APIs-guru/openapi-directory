package shared

type FreeBetDetail struct {
	AwardDateTime  *string `json:"awardDateTime,omitempty"`
	DisplayText    *string `json:"displayText,omitempty"`
	ExpiryDateTime *string `json:"expiryDateTime,omitempty"`
	ID             int64   `json:"id"`
	OfferDesc      *string `json:"offerDesc,omitempty"`
	OfferID        *int64  `json:"offerId,omitempty"`
	OfferName      string  `json:"offerName"`
	StartDateTime  *string `json:"startDateTime,omitempty"`
	Value          float64 `json:"value"`
}
