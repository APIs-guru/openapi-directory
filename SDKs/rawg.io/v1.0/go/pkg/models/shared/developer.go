package shared

type Developer struct {
	GamesCount      *int64  `json:"games_count,omitempty"`
	ID              *int64  `json:"id,omitempty"`
	ImageBackground *string `json:"image_background,omitempty"`
	Name            string  `json:"name"`
	Slug            *string `json:"slug,omitempty"`
}
