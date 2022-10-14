package shared

type OrderQuantityUnit struct {
	CatalogVersion  *int64           `json:"catalog_version,omitempty"`
	MeasurementUnit *MeasurementUnit `json:"measurement_unit,omitempty"`
	Precision       *int64           `json:"precision,omitempty"`
}
