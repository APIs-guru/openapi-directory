package shared

type PicoLoadmanagementGroupDto struct {
	ID               *string  `json:"Id,omitempty"`
	MaxCurrent       *float64 `json:"MaxCurrent,omitempty"`
	Name             *string  `json:"Name,omitempty"`
	NumberOfStations *int32   `json:"NumberOfStations,omitempty"`
}
