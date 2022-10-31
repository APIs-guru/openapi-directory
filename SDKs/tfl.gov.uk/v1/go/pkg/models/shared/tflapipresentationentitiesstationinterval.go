package shared

type TflAPIPresentationEntitiesStationInterval struct {
	ID        *string                              `json:"id,omitempty"`
	Intervals []TflAPIPresentationEntitiesInterval `json:"intervals,omitempty"`
}
