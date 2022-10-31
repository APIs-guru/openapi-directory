package shared

type ShowFollowEmbedded struct {
	Show map[string]interface{} `json:"show,omitempty"`
}

type ShowFollow struct {
	Embedded *ShowFollowEmbedded `json:"_embedded,omitempty"`
	ShowID   *int64              `json:"show_id,omitempty"`
}
