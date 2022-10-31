package shared

type TflAPIPresentationEntitiesCarParkOccupancy struct {
	Bays              []TflAPIPresentationEntitiesBay `json:"bays,omitempty"`
	CarParkDetailsURL *string                         `json:"carParkDetailsUrl,omitempty"`
	ID                *string                         `json:"id,omitempty"`
	Name              *string                         `json:"name,omitempty"`
}
