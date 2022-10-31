package shared

type CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner struct {
	Latitude  *string `json:"latitude,omitempty"`
	Longitude *string `json:"longitude,omitempty"`
}

type CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner struct {
	Latitude  *string `json:"latitude,omitempty"`
	Longitude *string `json:"longitude,omitempty"`
}

type CalculateRoutePostDataParametersAvoidAreasRectangles struct {
	NorthEastCorner *CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner `json:"northEastCorner,omitempty"`
	SouthWestCorner *CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner `json:"southWestCorner,omitempty"`
}

type CalculateRoutePostDataParametersAvoidAreas struct {
	Rectangles []CalculateRoutePostDataParametersAvoidAreasRectangles `json:"rectangles,omitempty"`
}

type CalculateRoutePostDataParameters struct {
	AllowVignette    []string                                    `json:"allowVignette,omitempty"`
	AvoidAreas       *CalculateRoutePostDataParametersAvoidAreas `json:"avoidAreas,omitempty"`
	AvoidVignette    []string                                    `json:"avoidVignette,omitempty"`
	SupportingPoints []interface{}                               `json:"supportingPoints,omitempty"`
}
