package shared



type Platform struct {
    GamesCount *int64 `json:"games_count,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Image *string `json:"image,omitempty"`
    ImageBackground *string `json:"image_background,omitempty"`
    Name string `json:"name"`
    Slug *string `json:"slug,omitempty"`
    YearEnd *int64 `json:"year_end,omitempty"`
    YearStart *int64 `json:"year_start,omitempty"`
    
}

