package shared

type NearbyTypeEnum string

const (
	NearbyTypeEnumNearbyFacility NearbyTypeEnum = "NearbyFacility"
)

// Nearby
// JSON API-compliant object describing a nearby VA facility
type Nearby struct {
	Attributes NearbyAttributes `json:"attributes"`
	ID         string           `json:"id"`
	Type       NearbyTypeEnum   `json:"type"`
}
