package shared

type GameStoreFull struct {
	GameID  *string `json:"game_id"`
	ID      *int64  `json:"id"`
	StoreID *string `json:"store_id"`
	URL     string  `json:"url"`
}
