package shared

type OrderQuantityUnit struct {
	CatalogVersion  *int64           `json:"catalog_version"`
	MeasurementUnit *MeasurementUnit `json:"measurement_unit"`
	Precision       *int64           `json:"precision"`
}
