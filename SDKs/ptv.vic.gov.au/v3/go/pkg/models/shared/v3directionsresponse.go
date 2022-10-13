package shared

type V3DirectionsResponse struct {
	Directions []V3DirectionWithDescription `json:"directions"`
	Status     *V3Status                    `json:"status"`
}
