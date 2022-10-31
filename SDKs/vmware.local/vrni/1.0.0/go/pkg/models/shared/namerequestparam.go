package shared

type NameRequestParam struct {
	EntityID *string `json:"entity_id,omitempty"`
	Time     *int64  `json:"time,omitempty"`
}
