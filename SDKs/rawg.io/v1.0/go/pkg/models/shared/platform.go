package shared

type Platform struct {
	GamesCount      *int64  `json:"games_count"`
	ID              *int64  `json:"id"`
	Image           *string `json:"image"`
	ImageBackground *string `json:"image_background"`
	Name            string  `json:"name"`
	Slug            *string `json:"slug"`
	YearEnd         *int64  `json:"year_end"`
	YearStart       *int64  `json:"year_start"`
}
