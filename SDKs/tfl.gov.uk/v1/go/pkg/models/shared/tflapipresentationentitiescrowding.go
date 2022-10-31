package shared



type TflAPIPresentationEntitiesCrowding struct {
    PassengerFlows []TflAPIPresentationEntitiesPassengerFlow `json:"passengerFlows,omitempty"`
    TrainLoadings []TflAPIPresentationEntitiesTrainLoading `json:"trainLoadings,omitempty"`
    
}

