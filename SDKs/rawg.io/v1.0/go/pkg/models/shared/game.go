package shared

import (
	"time"
)

type GameEsrbRatingNameEnum string

const (
	GameEsrbRatingNameEnumEveryone       GameEsrbRatingNameEnum = "Everyone"
	GameEsrbRatingNameEnumEveryone10Plus GameEsrbRatingNameEnum = "Everyone 10+"
	GameEsrbRatingNameEnumTeen           GameEsrbRatingNameEnum = "Teen"
	GameEsrbRatingNameEnumMature         GameEsrbRatingNameEnum = "Mature"
	GameEsrbRatingNameEnumAdultsOnly     GameEsrbRatingNameEnum = "Adults Only"
	GameEsrbRatingNameEnumRatingPending  GameEsrbRatingNameEnum = "Rating Pending"
)

type GameEsrbRatingSlugEnum string

const (
	GameEsrbRatingSlugEnumEveryone       GameEsrbRatingSlugEnum = "everyone"
	GameEsrbRatingSlugEnumEveryone10Plus GameEsrbRatingSlugEnum = "everyone-10-plus"
	GameEsrbRatingSlugEnumTeen           GameEsrbRatingSlugEnum = "teen"
	GameEsrbRatingSlugEnumMature         GameEsrbRatingSlugEnum = "mature"
	GameEsrbRatingSlugEnumAdultsOnly     GameEsrbRatingSlugEnum = "adults-only"
	GameEsrbRatingSlugEnumRatingPending  GameEsrbRatingSlugEnum = "rating-pending"
)

type GameEsrbRating struct {
	ID   *int64                  `json:"id,omitempty"`
	Name *GameEsrbRatingNameEnum `json:"name,omitempty"`
	Slug *GameEsrbRatingSlugEnum `json:"slug,omitempty"`
}

type GamePlatformsPlatform struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

type GamePlatformsRequirements struct {
	Minimum     *string `json:"minimum,omitempty"`
	Recommended *string `json:"recommended,omitempty"`
}

type GamePlatforms struct {
	Platform     *GamePlatformsPlatform     `json:"platform,omitempty"`
	ReleasedAt   *string                    `json:"released_at,omitempty"`
	Requirements *GamePlatformsRequirements `json:"requirements,omitempty"`
}

type Game struct {
	Added            *int64                 `json:"added,omitempty"`
	AddedByStatus    map[string]interface{} `json:"added_by_status,omitempty"`
	BackgroundImage  *string                `json:"background_image,omitempty"`
	EsrbRating       *GameEsrbRating        `json:"esrb_rating,omitempty"`
	ID               *int64                 `json:"id,omitempty"`
	Metacritic       *int64                 `json:"metacritic,omitempty"`
	Name             *string                `json:"name,omitempty"`
	Platforms        []GamePlatforms        `json:"platforms,omitempty"`
	Playtime         *int64                 `json:"playtime,omitempty"`
	Rating           float64                `json:"rating"`
	RatingTop        *int64                 `json:"rating_top,omitempty"`
	Ratings          map[string]interface{} `json:"ratings,omitempty"`
	RatingsCount     *int64                 `json:"ratings_count,omitempty"`
	Released         *time.Time             `json:"released,omitempty"`
	ReviewsTextCount *string                `json:"reviews_text_count,omitempty"`
	Slug             *string                `json:"slug,omitempty"`
	SuggestionsCount *int64                 `json:"suggestions_count,omitempty"`
	Tba              *bool                  `json:"tba,omitempty"`
	Updated          *time.Time             `json:"updated,omitempty"`
}
