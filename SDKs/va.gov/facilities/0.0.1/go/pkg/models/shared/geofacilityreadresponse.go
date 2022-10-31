package shared




type GeoFacilityReadResponseTypeEnum string

const (
    GeoFacilityReadResponseTypeEnumFeature GeoFacilityReadResponseTypeEnum = "Feature"
)


type GeoFacilityReadResponse struct {
    Geometry Geometry `json:"geometry"`
    Properties Properties `json:"properties"`
    Type GeoFacilityReadResponseTypeEnum `json:"type"`
    
}

