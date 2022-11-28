package shared

// TflAPIPresentationEntitiesBikePointOccupancy
// Bike point occupancy
type TflAPIPresentationEntitiesBikePointOccupancy struct {
	BikesCount *int32  `json:"bikesCount,omitempty"`
	EmptyDocks *int32  `json:"emptyDocks,omitempty"`
	ID         *string `json:"id,omitempty"`
	Name       *string `json:"name,omitempty"`
	TotalDocks *int32  `json:"totalDocks,omitempty"`
}
