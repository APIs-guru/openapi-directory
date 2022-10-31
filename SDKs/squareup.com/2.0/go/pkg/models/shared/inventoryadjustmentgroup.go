package shared

type InventoryAdjustmentGroup struct {
	FromState        *string `json:"from_state,omitempty"`
	ID               *string `json:"id,omitempty"`
	RootAdjustmentID *string `json:"root_adjustment_id,omitempty"`
	ToState          *string `json:"to_state,omitempty"`
}
