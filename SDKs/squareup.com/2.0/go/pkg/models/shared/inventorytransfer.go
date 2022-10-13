package shared

type InventoryTransfer struct {
	CatalogObjectID   *string            `json:"catalog_object_id"`
	CatalogObjectType *string            `json:"catalog_object_type"`
	CreatedAt         *string            `json:"created_at"`
	EmployeeID        *string            `json:"employee_id"`
	FromLocationID    *string            `json:"from_location_id"`
	ID                *string            `json:"id"`
	OccurredAt        *string            `json:"occurred_at"`
	Quantity          *string            `json:"quantity"`
	ReferenceID       *string            `json:"reference_id"`
	Source            *SourceApplication `json:"source"`
	State             *string            `json:"state"`
	ToLocationID      *string            `json:"to_location_id"`
}
