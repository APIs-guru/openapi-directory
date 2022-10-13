package shared

type InventoryAdjustmentGroup struct {
	FromState        *string `json:"from_state"`
	ID               *string `json:"id"`
	RootAdjustmentID *string `json:"root_adjustment_id"`
	ToState          *string `json:"to_state"`
}
