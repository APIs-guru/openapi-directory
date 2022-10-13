package shared

type GeoFacilitiesResponseTypeEnum string

const (
	GeoFacilitiesResponseTypeEnumFeatureCollection GeoFacilitiesResponseTypeEnum = "FeatureCollection"
)

type GeoFacilitiesResponse struct {
	Features []GeoFacility                 `json:"features"`
	Type     GeoFacilitiesResponseTypeEnum `json:"type"`
}
