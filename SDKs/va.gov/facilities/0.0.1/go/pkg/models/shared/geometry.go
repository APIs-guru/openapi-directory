package shared




type GeometryTypeEnum string

const (
    GeometryTypeEnumPoint GeometryTypeEnum = "Point"
)


type Geometry struct {
    Coordinates []float64 `json:"coordinates,omitempty"`
    Type GeometryTypeEnum `json:"type"`
    
}

