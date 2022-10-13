package shared

type TflAPIPresentationEntitiesJourneyPlannerFare struct {
	ChargeLevel       *string                                           `json:"chargeLevel"`
	ChargeProfileName *string                                           `json:"chargeProfileName"`
	Cost              *int32                                            `json:"cost"`
	HighZone          *int32                                            `json:"highZone"`
	IsHopperFare      *bool                                             `json:"isHopperFare"`
	LowZone           *int32                                            `json:"lowZone"`
	OffPeak           *int32                                            `json:"offPeak"`
	Peak              *int32                                            `json:"peak"`
	Taps              []TflAPIPresentationEntitiesJourneyPlannerFareTap `json:"taps"`
}
