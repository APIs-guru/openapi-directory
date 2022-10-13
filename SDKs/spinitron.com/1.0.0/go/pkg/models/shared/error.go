package shared

type Error struct {
	Code    *int64  `json:"code"`
	Message *string `json:"message"`
	Name    *string `json:"name"`
	Status  *int64  `json:"status"`
	Type    *string `json:"type"`
}
