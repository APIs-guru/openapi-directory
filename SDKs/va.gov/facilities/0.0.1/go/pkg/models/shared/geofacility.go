package shared




type GeoFacilityTypeEnum string

const (
    GeoFacilityTypeEnumFeature GeoFacilityTypeEnum = "Feature"
)


type GeoFacility struct {
    Geometry Geometry `json:"geometry"`
    Properties Properties `json:"properties"`
    Type GeoFacilityTypeEnum `json:"type"`
    
}

