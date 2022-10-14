package shared

type TflAPIPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData struct {
	DestinationID                 *string `json:"destinationId,omitempty"`
	DestinationNumberOfBikes      *int32  `json:"destinationNumberOfBikes,omitempty"`
	DestinationNumberOfEmptySlots *int32  `json:"destinationNumberOfEmptySlots,omitempty"`
	OriginID                      *string `json:"originId,omitempty"`
	OriginNumberOfBikes           *int32  `json:"originNumberOfBikes,omitempty"`
	OriginNumberOfEmptySlots      *int32  `json:"originNumberOfEmptySlots,omitempty"`
}
