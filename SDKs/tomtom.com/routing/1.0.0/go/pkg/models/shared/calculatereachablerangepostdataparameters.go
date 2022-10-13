package shared

type CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner struct {
	Latitude  *string `json:"latitude"`
	Longitude *string `json:"longitude"`
}

type CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner struct {
	Latitude  *string `json:"latitude"`
	Longitude *string `json:"longitude"`
}

type CalculateReachableRangePostDataParametersAvoidAreasRectangles struct {
	NorthEastCorner *CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner `json:"northEastCorner"`
	SouthWestCorner *CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner `json:"southWestCorner"`
}

type CalculateReachableRangePostDataParametersAvoidAreas struct {
	Rectangles []CalculateReachableRangePostDataParametersAvoidAreasRectangles `json:"rectangles"`
}

type CalculateReachableRangePostDataParameters struct {
	AllowVignette []string                                             `json:"allowVignette"`
	AvoidAreas    *CalculateReachableRangePostDataParametersAvoidAreas `json:"avoidAreas"`
	AvoidVignette []string                                             `json:"avoidVignette"`
}
