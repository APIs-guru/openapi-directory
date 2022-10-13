package shared

type StandardUnitDescription struct {
	Abbreviation *string          `json:"abbreviation"`
	Name         *string          `json:"name"`
	Unit         *MeasurementUnit `json:"unit"`
}
