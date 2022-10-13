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
	ID   *int64                  `json:"id"`
	Name *GameEsrbRatingNameEnum `json:"name"`
	Slug *GameEsrbRatingSlugEnum `json:"slug"`
}

type GamePlatformsPlatform struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
	Slug *string `json:"slug"`
}

type GamePlatformsRequirements struct {
	Minimum     *string `json:"minimum"`
	Recommended *string `json:"recommended"`
}

type GamePlatforms struct {
	Platform     *GamePlatformsPlatform     `json:"platform"`
	ReleasedAt   *string                    `json:"released_at"`
	Requirements *GamePlatformsRequirements `json:"requirements"`
}

type Game struct {
	Added            *int64                 `json:"added"`
	AddedByStatus    map[string]interface{} `json:"added_by_status"`
	BackgroundImage  *string                `json:"background_image"`
	EsrbRating       *GameEsrbRating        `json:"esrb_rating"`
	ID               *int64                 `json:"id"`
	Metacritic       *int64                 `json:"metacritic"`
	Name             *string                `json:"name"`
	Platforms        []GamePlatforms        `json:"platforms"`
	Playtime         *int64                 `json:"playtime"`
	Rating           float64                `json:"rating"`
	RatingTop        *int64                 `json:"rating_top"`
	Ratings          map[string]interface{} `json:"ratings"`
	RatingsCount     *int64                 `json:"ratings_count"`
	Released         *time.Time             `json:"released"`
	ReviewsTextCount *string                `json:"reviews_text_count"`
	Slug             *string                `json:"slug"`
	SuggestionsCount *int64                 `json:"suggestions_count"`
	Tba              *bool                  `json:"tba"`
	Updated          *time.Time             `json:"updated"`
}
