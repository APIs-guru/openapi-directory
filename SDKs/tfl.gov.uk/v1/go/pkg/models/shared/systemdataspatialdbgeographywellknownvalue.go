package shared

type SystemDataSpatialDbGeographyWellKnownValue struct {
	CoordinateSystemID *int32  `json:"coordinateSystemId,omitempty"`
	WellKnownBinary    *string `json:"wellKnownBinary,omitempty"`
	WellKnownText      *string `json:"wellKnownText,omitempty"`
}
