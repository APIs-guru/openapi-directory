package shared

type GeoFacilityTypeEnum string

const (
	GeoFacilityTypeEnumFeature GeoFacilityTypeEnum = "Feature"
)

// GeoFacility
// GeoJSON-complaint Feature object describing a VA Facility
type GeoFacility struct {
	Geometry   Geometry            `json:"geometry"`
	Properties Properties          `json:"properties"`
	Type       GeoFacilityTypeEnum `json:"type"`
}
