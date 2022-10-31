package shared

type BatchChangeInventoryRequest struct {
	Changes               []InventoryChange `json:"changes,omitempty"`
	IdempotencyKey        string            `json:"idempotency_key"`
	IgnoreUnchangedCounts *bool             `json:"ignore_unchanged_counts,omitempty"`
}
