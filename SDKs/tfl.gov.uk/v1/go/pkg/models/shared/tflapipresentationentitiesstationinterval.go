package shared

type TflAPIPresentationEntitiesStationInterval struct {
	ID        *string                              `json:"id"`
	Intervals []TflAPIPresentationEntitiesInterval `json:"intervals"`
}
