package shared

type Tag struct {
	GamesCount      *int64  `json:"games_count"`
	ID              *int64  `json:"id"`
	ImageBackground *string `json:"image_background"`
	Language        *string `json:"language"`
	Name            string  `json:"name"`
	Slug            *string `json:"slug"`
}
