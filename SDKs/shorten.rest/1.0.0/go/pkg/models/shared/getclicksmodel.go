package shared

type GetClicksModel struct {
	Clicks []ClickModel `json:"clicks"`
	LastID *string      `json:"lastId"`
}
