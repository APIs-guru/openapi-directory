package shared

type InventoryChange struct {
	Adjustment        *InventoryAdjustment    `json:"adjustment"`
	MeasurementUnit   *CatalogMeasurementUnit `json:"measurement_unit"`
	MeasurementUnitID *string                 `json:"measurement_unit_id"`
	PhysicalCount     *InventoryPhysicalCount `json:"physical_count"`
	Transfer          *InventoryTransfer      `json:"transfer"`
	Type              *string                 `json:"type"`
}
