package shared

type TflAPIPresentationEntitiesCrowding struct {
	PassengerFlows []TflAPIPresentationEntitiesPassengerFlow `json:"passengerFlows"`
	TrainLoadings  []TflAPIPresentationEntitiesTrainLoading  `json:"trainLoadings"`
}
