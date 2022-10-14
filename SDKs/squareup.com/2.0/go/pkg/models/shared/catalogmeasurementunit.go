package shared

type CatalogMeasurementUnit struct {
	MeasurementUnit *MeasurementUnit `json:"measurement_unit,omitempty"`
	Precision       *int64           `json:"precision,omitempty"`
}
