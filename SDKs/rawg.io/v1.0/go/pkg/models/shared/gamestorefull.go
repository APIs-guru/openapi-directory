package shared



type GameStoreFull struct {
    GameID *string `json:"game_id,omitempty"`
    ID *int64 `json:"id,omitempty"`
    StoreID *string `json:"store_id,omitempty"`
    URL string `json:"url"`
    
}

