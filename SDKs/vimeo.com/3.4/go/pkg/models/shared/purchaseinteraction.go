package shared

type PurchaseInteractionBuy struct {
	Drm *bool `json:"drm,omitempty"`
}

type PurchaseInteractionSubscribeStreamEnum string

const (
	PurchaseInteractionSubscribeStreamEnumAvailable   PurchaseInteractionSubscribeStreamEnum = "available"
	PurchaseInteractionSubscribeStreamEnumPurchased   PurchaseInteractionSubscribeStreamEnum = "purchased"
	PurchaseInteractionSubscribeStreamEnumRestricted  PurchaseInteractionSubscribeStreamEnum = "restricted"
	PurchaseInteractionSubscribeStreamEnumUnavailable PurchaseInteractionSubscribeStreamEnum = "unavailable"
)

type PurchaseInteractionSubscribe struct {
	Drm          *bool                                   `json:"drm,omitempty"`
	ExpiresTime  *string                                 `json:"expires_time,omitempty"`
	Link         *string                                 `json:"link,omitempty"`
	PurchaseTime *string                                 `json:"purchase_time,omitempty"`
	Stream       *PurchaseInteractionSubscribeStreamEnum `json:"stream,omitempty"`
	URI          *string                                 `json:"uri,omitempty"`
}

type PurchaseInteraction struct {
	Buy       *PurchaseInteractionBuy       `json:"buy,omitempty"`
	Rent      map[string]interface{}        `json:"rent,omitempty"`
	Subscribe *PurchaseInteractionSubscribe `json:"subscribe,omitempty"`
}
