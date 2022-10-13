package shared

type NameRequestParam struct {
	EntityID *string `json:"entity_id"`
	Time     *int64  `json:"time"`
}
