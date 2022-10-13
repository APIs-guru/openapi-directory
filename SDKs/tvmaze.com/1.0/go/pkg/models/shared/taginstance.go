package shared

type TagInstanceEmbedded struct {
	Show map[string]interface{} `json:"show"`
}

type TagInstance struct {
	Embedded *TagInstanceEmbedded `json:"_embedded"`
	ShowID   *int64               `json:"show_id"`
}
