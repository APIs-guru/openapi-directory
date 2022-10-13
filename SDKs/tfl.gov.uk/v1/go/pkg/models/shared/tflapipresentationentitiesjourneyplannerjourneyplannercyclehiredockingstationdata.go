package shared

type TflAPIPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData struct {
	DestinationID                 *string `json:"destinationId"`
	DestinationNumberOfBikes      *int32  `json:"destinationNumberOfBikes"`
	DestinationNumberOfEmptySlots *int32  `json:"destinationNumberOfEmptySlots"`
	OriginID                      *string `json:"originId"`
	OriginNumberOfBikes           *int32  `json:"originNumberOfBikes"`
	OriginNumberOfEmptySlots      *int32  `json:"originNumberOfEmptySlots"`
}
