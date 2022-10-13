package shared

type InventoryPhysicalCount struct {
	CatalogObjectID   *string            `json:"catalog_object_id"`
	CatalogObjectType *string            `json:"catalog_object_type"`
	CreatedAt         *string            `json:"created_at"`
	EmployeeID        *string            `json:"employee_id"`
	ID                *string            `json:"id"`
	LocationID        *string            `json:"location_id"`
	OccurredAt        *string            `json:"occurred_at"`
	Quantity          *string            `json:"quantity"`
	ReferenceID       *string            `json:"reference_id"`
	Source            *SourceApplication `json:"source"`
	State             *string            `json:"state"`
}
