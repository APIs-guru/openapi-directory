package shared

type PicoLoadmanagementGroupDto struct {
	ID               *string  `json:"Id"`
	MaxCurrent       *float64 `json:"MaxCurrent"`
	Name             *string  `json:"Name"`
	NumberOfStations *int32   `json:"NumberOfStations"`
}
