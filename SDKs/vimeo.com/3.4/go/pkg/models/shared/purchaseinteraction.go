package shared

type PurchaseInteractionBuy struct {
	Drm *bool `json:"drm"`
}

type PurchaseInteractionSubscribeStreamEnum string

const (
	PurchaseInteractionSubscribeStreamEnumAvailable   PurchaseInteractionSubscribeStreamEnum = "available"
	PurchaseInteractionSubscribeStreamEnumPurchased   PurchaseInteractionSubscribeStreamEnum = "purchased"
	PurchaseInteractionSubscribeStreamEnumRestricted  PurchaseInteractionSubscribeStreamEnum = "restricted"
	PurchaseInteractionSubscribeStreamEnumUnavailable PurchaseInteractionSubscribeStreamEnum = "unavailable"
)

type PurchaseInteractionSubscribe struct {
	Drm          *bool                                   `json:"drm"`
	ExpiresTime  *string                                 `json:"expires_time"`
	Link         *string                                 `json:"link"`
	PurchaseTime *string                                 `json:"purchase_time"`
	Stream       *PurchaseInteractionSubscribeStreamEnum `json:"stream"`
	URI          *string                                 `json:"uri"`
}

type PurchaseInteraction struct {
	Buy       *PurchaseInteractionBuy       `json:"buy"`
	Rent      map[string]interface{}        `json:"rent"`
	Subscribe *PurchaseInteractionSubscribe `json:"subscribe"`
}
