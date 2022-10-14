package shared

type InventoryTransfer struct {
	CatalogObjectID   *string            `json:"catalog_object_id,omitempty"`
	CatalogObjectType *string            `json:"catalog_object_type,omitempty"`
	CreatedAt         *string            `json:"created_at,omitempty"`
	EmployeeID        *string            `json:"employee_id,omitempty"`
	FromLocationID    *string            `json:"from_location_id,omitempty"`
	ID                *string            `json:"id,omitempty"`
	OccurredAt        *string            `json:"occurred_at,omitempty"`
	Quantity          *string            `json:"quantity,omitempty"`
	ReferenceID       *string            `json:"reference_id,omitempty"`
	Source            *SourceApplication `json:"source,omitempty"`
	State             *string            `json:"state,omitempty"`
	ToLocationID      *string            `json:"to_location_id,omitempty"`
}
