package shared

type CodeCategory struct {
	Category *Category `json:"category,omitempty"`
	ID       *int64    `json:"id,omitempty"`
}
