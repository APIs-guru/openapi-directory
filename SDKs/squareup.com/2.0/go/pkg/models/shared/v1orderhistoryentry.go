package shared

type V1OrderHistoryEntry struct {
	Action    *string `json:"action,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
}
