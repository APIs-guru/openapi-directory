package shared

type CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner struct {
	Latitude  *string `json:"latitude"`
	Longitude *string `json:"longitude"`
}

type CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner struct {
	Latitude  *string `json:"latitude"`
	Longitude *string `json:"longitude"`
}

type CalculateRoutePostDataParametersAvoidAreasRectangles struct {
	NorthEastCorner *CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner `json:"northEastCorner"`
	SouthWestCorner *CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner `json:"southWestCorner"`
}

type CalculateRoutePostDataParametersAvoidAreas struct {
	Rectangles []CalculateRoutePostDataParametersAvoidAreasRectangles `json:"rectangles"`
}

type CalculateRoutePostDataParameters struct {
	AllowVignette    []string                                    `json:"allowVignette"`
	AvoidAreas       *CalculateRoutePostDataParametersAvoidAreas `json:"avoidAreas"`
	AvoidVignette    []string                                    `json:"avoidVignette"`
	SupportingPoints []interface{}                               `json:"supportingPoints"`
}
