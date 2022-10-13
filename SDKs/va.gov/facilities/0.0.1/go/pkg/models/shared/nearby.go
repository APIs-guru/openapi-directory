package shared

type NearbyTypeEnum string

const (
	NearbyTypeEnumNearbyFacility NearbyTypeEnum = "NearbyFacility"
)

type Nearby struct {
	Attributes NearbyAttributes `json:"attributes"`
	ID         string           `json:"id"`
	Type       NearbyTypeEnum   `json:"type"`
}
