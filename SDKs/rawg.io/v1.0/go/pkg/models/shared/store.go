package shared

type Store struct {
	Domain          *string `json:"domain"`
	GamesCount      *int64  `json:"games_count"`
	ID              *int64  `json:"id"`
	ImageBackground *string `json:"image_background"`
	Name            string  `json:"name"`
	Slug            *string `json:"slug"`
}
