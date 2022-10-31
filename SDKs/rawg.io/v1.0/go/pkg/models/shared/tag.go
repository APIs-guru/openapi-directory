package shared



type Tag struct {
    GamesCount *int64 `json:"games_count,omitempty"`
    ID *int64 `json:"id,omitempty"`
    ImageBackground *string `json:"image_background,omitempty"`
    Language *string `json:"language,omitempty"`
    Name string `json:"name"`
    Slug *string `json:"slug,omitempty"`
    
}

