package shared

type InventoryChange struct {
	Adjustment        *InventoryAdjustment    `json:"adjustment,omitempty"`
	MeasurementUnit   *CatalogMeasurementUnit `json:"measurement_unit,omitempty"`
	MeasurementUnitID *string                 `json:"measurement_unit_id,omitempty"`
	PhysicalCount     *InventoryPhysicalCount `json:"physical_count,omitempty"`
	Transfer          *InventoryTransfer      `json:"transfer,omitempty"`
	Type              *string                 `json:"type,omitempty"`
}
