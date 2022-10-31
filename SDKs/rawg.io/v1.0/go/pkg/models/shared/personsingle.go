package shared

import (
	"time"
)

type PersonSingle struct {
	Description     *string    `json:"description,omitempty"`
	GamesCount      *int64     `json:"games_count,omitempty"`
	ID              *int64     `json:"id,omitempty"`
	Image           *string    `json:"image,omitempty"`
	ImageBackground *string    `json:"image_background,omitempty"`
	Name            string     `json:"name"`
	Rating          *string    `json:"rating,omitempty"`
	RatingTop       *int64     `json:"rating_top,omitempty"`
	ReviewsCount    *int64     `json:"reviews_count,omitempty"`
	Slug            *string    `json:"slug,omitempty"`
	Updated         *time.Time `json:"updated,omitempty"`
}
