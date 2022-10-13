package shared

type CatalogMeasurementUnit struct {
	MeasurementUnit *MeasurementUnit `json:"measurement_unit"`
	Precision       *int64           `json:"precision"`
}
