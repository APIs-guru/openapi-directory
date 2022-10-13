package shared

type FreeBetDetail struct {
	AwardDateTime  *string `json:"awardDateTime"`
	DisplayText    *string `json:"displayText"`
	ExpiryDateTime *string `json:"expiryDateTime"`
	ID             int64   `json:"id"`
	OfferDesc      *string `json:"offerDesc"`
	OfferID        *int64  `json:"offerId"`
	OfferName      string  `json:"offerName"`
	StartDateTime  *string `json:"startDateTime"`
	Value          float64 `json:"value"`
}
