package shared

// TflAPIPresentationEntitiesJourneyPlannerItineraryResult
// A DTO representing a list of possible journeys.
type TflAPIPresentationEntitiesJourneyPlannerItineraryResult struct {
	CycleHireDockingStationData *TflAPIPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData `json:"cycleHireDockingStationData,omitempty"`
	JourneyVector               *TflAPIPresentationEntitiesJourneyPlannerJourneyVector                             `json:"journeyVector,omitempty"`
	Journeys                    []TflAPIPresentationEntitiesJourneyPlannerJourney                                  `json:"journeys,omitempty"`
	Lines                       []TflAPIPresentationEntitiesLine                                                   `json:"lines,omitempty"`
	RecommendedMaxAgeMinutes    *int32                                                                             `json:"recommendedMaxAgeMinutes,omitempty"`
	SearchCriteria              *TflAPIPresentationEntitiesJourneyPlannerSearchCriteria                            `json:"searchCriteria,omitempty"`
	StopMessages                []string                                                                           `json:"stopMessages,omitempty"`
}
