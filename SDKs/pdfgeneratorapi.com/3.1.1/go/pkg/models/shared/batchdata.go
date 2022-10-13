package shared

type BatchData struct {
	Data     *Data  `json:"data"`
	Template *int64 `json:"template"`
}
