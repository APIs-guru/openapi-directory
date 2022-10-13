package shared

type Movie struct {
	Data    map[string]interface{} `json:"data"`
	ID      *int64                 `json:"id"`
	Name    *string                `json:"name"`
	Preview *string                `json:"preview"`
}
