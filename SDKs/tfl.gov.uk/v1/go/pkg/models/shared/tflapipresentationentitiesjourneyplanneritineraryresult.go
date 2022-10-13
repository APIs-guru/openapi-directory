package shared

type TflAPIPresentationEntitiesJourneyPlannerItineraryResult struct {
	CycleHireDockingStationData *TflAPIPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData `json:"cycleHireDockingStationData"`
	JourneyVector               *TflAPIPresentationEntitiesJourneyPlannerJourneyVector                             `json:"journeyVector"`
	Journeys                    []TflAPIPresentationEntitiesJourneyPlannerJourney                                  `json:"journeys"`
	Lines                       []TflAPIPresentationEntitiesLine                                                   `json:"lines"`
	RecommendedMaxAgeMinutes    *int32                                                                             `json:"recommendedMaxAgeMinutes"`
	SearchCriteria              *TflAPIPresentationEntitiesJourneyPlannerSearchCriteria                            `json:"searchCriteria"`
	StopMessages                []string                                                                           `json:"stopMessages"`
}
