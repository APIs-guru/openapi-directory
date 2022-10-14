package shared

type TflAPIPresentationEntitiesJourneyPlannerFare struct {
	ChargeLevel       *string                                           `json:"chargeLevel,omitempty"`
	ChargeProfileName *string                                           `json:"chargeProfileName,omitempty"`
	Cost              *int32                                            `json:"cost,omitempty"`
	HighZone          *int32                                            `json:"highZone,omitempty"`
	IsHopperFare      *bool                                             `json:"isHopperFare,omitempty"`
	LowZone           *int32                                            `json:"lowZone,omitempty"`
	OffPeak           *int32                                            `json:"offPeak,omitempty"`
	Peak              *int32                                            `json:"peak,omitempty"`
	Taps              []TflAPIPresentationEntitiesJourneyPlannerFareTap `json:"taps,omitempty"`
}
