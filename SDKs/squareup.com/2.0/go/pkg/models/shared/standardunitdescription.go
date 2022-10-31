package shared

type StandardUnitDescription struct {
	Abbreviation *string          `json:"abbreviation,omitempty"`
	Name         *string          `json:"name,omitempty"`
	Unit         *MeasurementUnit `json:"unit,omitempty"`
}
