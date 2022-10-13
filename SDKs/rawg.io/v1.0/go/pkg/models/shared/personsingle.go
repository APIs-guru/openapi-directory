package shared

import (
	"time"
)

type PersonSingle struct {
	Description     *string    `json:"description"`
	GamesCount      *int64     `json:"games_count"`
	ID              *int64     `json:"id"`
	Image           *string    `json:"image"`
	ImageBackground *string    `json:"image_background"`
	Name            string     `json:"name"`
	Rating          *string    `json:"rating"`
	RatingTop       *int64     `json:"rating_top"`
	ReviewsCount    *int64     `json:"reviews_count"`
	Slug            *string    `json:"slug"`
	Updated         *time.Time `json:"updated"`
}
