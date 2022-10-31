package shared

import (
	"time"
)

type GameSingleEsrbRatingNameEnum string

const (
	GameSingleEsrbRatingNameEnumEveryone       GameSingleEsrbRatingNameEnum = "Everyone"
	GameSingleEsrbRatingNameEnumEveryone10Plus GameSingleEsrbRatingNameEnum = "Everyone 10+"
	GameSingleEsrbRatingNameEnumTeen           GameSingleEsrbRatingNameEnum = "Teen"
	GameSingleEsrbRatingNameEnumMature         GameSingleEsrbRatingNameEnum = "Mature"
	GameSingleEsrbRatingNameEnumAdultsOnly     GameSingleEsrbRatingNameEnum = "Adults Only"
	GameSingleEsrbRatingNameEnumRatingPending  GameSingleEsrbRatingNameEnum = "Rating Pending"
)

type GameSingleEsrbRatingSlugEnum string

const (
	GameSingleEsrbRatingSlugEnumEveryone       GameSingleEsrbRatingSlugEnum = "everyone"
	GameSingleEsrbRatingSlugEnumEveryone10Plus GameSingleEsrbRatingSlugEnum = "everyone-10-plus"
	GameSingleEsrbRatingSlugEnumTeen           GameSingleEsrbRatingSlugEnum = "teen"
	GameSingleEsrbRatingSlugEnumMature         GameSingleEsrbRatingSlugEnum = "mature"
	GameSingleEsrbRatingSlugEnumAdultsOnly     GameSingleEsrbRatingSlugEnum = "adults-only"
	GameSingleEsrbRatingSlugEnumRatingPending  GameSingleEsrbRatingSlugEnum = "rating-pending"
)

type GameSingleEsrbRating struct {
	ID   *int64                        `json:"id,omitempty"`
	Name *GameSingleEsrbRatingNameEnum `json:"name,omitempty"`
	Slug *GameSingleEsrbRatingSlugEnum `json:"slug,omitempty"`
}

type GameSinglePlatformsPlatform struct {
	ID   *int64  `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

type GameSinglePlatformsRequirements struct {
	Minimum     *string `json:"minimum,omitempty"`
	Recommended *string `json:"recommended,omitempty"`
}

type GameSinglePlatforms struct {
	Platform     *GameSinglePlatformsPlatform     `json:"platform,omitempty"`
	ReleasedAt   *string                          `json:"released_at,omitempty"`
	Requirements *GameSinglePlatformsRequirements `json:"requirements,omitempty"`
}

type GameSingle struct {
	AchievementsCount         *int64                   `json:"achievements_count,omitempty"`
	Added                     *int64                   `json:"added,omitempty"`
	AddedByStatus             map[string]interface{}   `json:"added_by_status,omitempty"`
	AdditionsCount            *int64                   `json:"additions_count,omitempty"`
	AlternativeNames          []string                 `json:"alternative_names,omitempty"`
	BackgroundImage           *string                  `json:"background_image,omitempty"`
	BackgroundImageAdditional *string                  `json:"background_image_additional,omitempty"`
	CreatorsCount             *int64                   `json:"creators_count,omitempty"`
	Description               *string                  `json:"description,omitempty"`
	EsrbRating                *GameSingleEsrbRating    `json:"esrb_rating,omitempty"`
	GameSeriesCount           *int64                   `json:"game_series_count,omitempty"`
	ID                        *int64                   `json:"id,omitempty"`
	Metacritic                *int64                   `json:"metacritic,omitempty"`
	MetacriticPlatforms       []GamePlatformMetacritic `json:"metacritic_platforms,omitempty"`
	MetacriticURL             *string                  `json:"metacritic_url,omitempty"`
	MoviesCount               *int64                   `json:"movies_count,omitempty"`
	Name                      *string                  `json:"name,omitempty"`
	NameOriginal              *string                  `json:"name_original,omitempty"`
	ParentAchievementsCount   *string                  `json:"parent_achievements_count,omitempty"`
	ParentsCount              *int64                   `json:"parents_count,omitempty"`
	Platforms                 []GameSinglePlatforms    `json:"platforms,omitempty"`
	Playtime                  *int64                   `json:"playtime,omitempty"`
	Rating                    float64                  `json:"rating"`
	RatingTop                 *int64                   `json:"rating_top,omitempty"`
	Ratings                   map[string]interface{}   `json:"ratings,omitempty"`
	RatingsCount              *int64                   `json:"ratings_count,omitempty"`
	Reactions                 map[string]interface{}   `json:"reactions,omitempty"`
	RedditCount               *int64                   `json:"reddit_count,omitempty"`
	RedditDescription         *string                  `json:"reddit_description,omitempty"`
	RedditLogo                *string                  `json:"reddit_logo,omitempty"`
	RedditName                *string                  `json:"reddit_name,omitempty"`
	RedditURL                 *string                  `json:"reddit_url,omitempty"`
	Released                  *time.Time               `json:"released,omitempty"`
	ReviewsTextCount          *string                  `json:"reviews_text_count,omitempty"`
	ScreenshotsCount          *int64                   `json:"screenshots_count,omitempty"`
	Slug                      *string                  `json:"slug,omitempty"`
	SuggestionsCount          *int64                   `json:"suggestions_count,omitempty"`
	Tba                       *bool                    `json:"tba,omitempty"`
	TwitchCount               *string                  `json:"twitch_count,omitempty"`
	Updated                   *time.Time               `json:"updated,omitempty"`
	Website                   *string                  `json:"website,omitempty"`
	YoutubeCount              *string                  `json:"youtube_count,omitempty"`
}
