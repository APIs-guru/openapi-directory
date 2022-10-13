package shared

type ShowFollowEmbedded struct {
	Show map[string]interface{} `json:"show"`
}

type ShowFollow struct {
	Embedded *ShowFollowEmbedded `json:"_embedded"`
	ShowID   *int64              `json:"show_id"`
}
