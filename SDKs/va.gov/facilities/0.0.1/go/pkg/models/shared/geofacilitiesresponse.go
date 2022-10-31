package shared




type GeoFacilitiesResponseTypeEnum string

const (
    GeoFacilitiesResponseTypeEnumFeatureCollection GeoFacilitiesResponseTypeEnum = "FeatureCollection"
)


type GeoFacilitiesResponse struct {
    Features []GeoFacility `json:"features,omitempty"`
    Type GeoFacilitiesResponseTypeEnum `json:"type"`
    
}

