package shared

type GroupCategory struct {
	Description *string `json:"description,omitempty"`
	ID          *string `json:"id,omitempty"`
	Name        string  `json:"name"`
	Parent      string  `json:"parent"`
}
