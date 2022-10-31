package shared

type CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner struct {
	Latitude  *string `json:"latitude,omitempty"`
	Longitude *string `json:"longitude,omitempty"`
}

type CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner struct {
	Latitude  *string `json:"latitude,omitempty"`
	Longitude *string `json:"longitude,omitempty"`
}

type CalculateReachableRangePostDataParametersAvoidAreasRectangles struct {
	NorthEastCorner *CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner `json:"northEastCorner,omitempty"`
	SouthWestCorner *CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner `json:"southWestCorner,omitempty"`
}

type CalculateReachableRangePostDataParametersAvoidAreas struct {
	Rectangles []CalculateReachableRangePostDataParametersAvoidAreasRectangles `json:"rectangles,omitempty"`
}

type CalculateReachableRangePostDataParameters struct {
	AllowVignette []string                                             `json:"allowVignette,omitempty"`
	AvoidAreas    *CalculateReachableRangePostDataParametersAvoidAreas `json:"avoidAreas,omitempty"`
	AvoidVignette []string                                             `json:"avoidVignette,omitempty"`
}
