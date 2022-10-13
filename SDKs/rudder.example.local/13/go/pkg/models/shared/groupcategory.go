package shared

type GroupCategory struct {
	Description *string `json:"description"`
	ID          *string `json:"id"`
	Name        string  `json:"name"`
	Parent      string  `json:"parent"`
}
