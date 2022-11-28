package shared

type Tag struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type TagInput struct {
	Name *string `json:"name,omitempty"`
}
