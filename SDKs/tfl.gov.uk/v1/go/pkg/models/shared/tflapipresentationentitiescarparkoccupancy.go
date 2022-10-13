package shared

type TflAPIPresentationEntitiesCarParkOccupancy struct {
	Bays              []TflAPIPresentationEntitiesBay `json:"bays"`
	CarParkDetailsURL *string                         `json:"carParkDetailsUrl"`
	ID                *string                         `json:"id"`
	Name              *string                         `json:"name"`
}
