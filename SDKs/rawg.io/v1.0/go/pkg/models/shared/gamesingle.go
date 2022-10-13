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
	ID   *int64                        `json:"id"`
	Name *GameSingleEsrbRatingNameEnum `json:"name"`
	Slug *GameSingleEsrbRatingSlugEnum `json:"slug"`
}

type GameSinglePlatformsPlatform struct {
	ID   *int64  `json:"id"`
	Name *string `json:"name"`
	Slug *string `json:"slug"`
}

type GameSinglePlatformsRequirements struct {
	Minimum     *string `json:"minimum"`
	Recommended *string `json:"recommended"`
}

type GameSinglePlatforms struct {
	Platform     *GameSinglePlatformsPlatform     `json:"platform"`
	ReleasedAt   *string                          `json:"released_at"`
	Requirements *GameSinglePlatformsRequirements `json:"requirements"`
}

type GameSingle struct {
	AchievementsCount         *int64                   `json:"achievements_count"`
	Added                     *int64                   `json:"added"`
	AddedByStatus             map[string]interface{}   `json:"added_by_status"`
	AdditionsCount            *int64                   `json:"additions_count"`
	AlternativeNames          []string                 `json:"alternative_names"`
	BackgroundImage           *string                  `json:"background_image"`
	BackgroundImageAdditional *string                  `json:"background_image_additional"`
	CreatorsCount             *int64                   `json:"creators_count"`
	Description               *string                  `json:"description"`
	EsrbRating                *GameSingleEsrbRating    `json:"esrb_rating"`
	GameSeriesCount           *int64                   `json:"game_series_count"`
	ID                        *int64                   `json:"id"`
	Metacritic                *int64                   `json:"metacritic"`
	MetacriticPlatforms       []GamePlatformMetacritic `json:"metacritic_platforms"`
	MetacriticURL             *string                  `json:"metacritic_url"`
	MoviesCount               *int64                   `json:"movies_count"`
	Name                      *string                  `json:"name"`
	NameOriginal              *string                  `json:"name_original"`
	ParentAchievementsCount   *string                  `json:"parent_achievements_count"`
	ParentsCount              *int64                   `json:"parents_count"`
	Platforms                 []GameSinglePlatforms    `json:"platforms"`
	Playtime                  *int64                   `json:"playtime"`
	Rating                    float64                  `json:"rating"`
	RatingTop                 *int64                   `json:"rating_top"`
	Ratings                   map[string]interface{}   `json:"ratings"`
	RatingsCount              *int64                   `json:"ratings_count"`
	Reactions                 map[string]interface{}   `json:"reactions"`
	RedditCount               *int64                   `json:"reddit_count"`
	RedditDescription         *string                  `json:"reddit_description"`
	RedditLogo                *string                  `json:"reddit_logo"`
	RedditName                *string                  `json:"reddit_name"`
	RedditURL                 *string                  `json:"reddit_url"`
	Released                  *time.Time               `json:"released"`
	ReviewsTextCount          *string                  `json:"reviews_text_count"`
	ScreenshotsCount          *int64                   `json:"screenshots_count"`
	Slug                      *string                  `json:"slug"`
	SuggestionsCount          *int64                   `json:"suggestions_count"`
	Tba                       *bool                    `json:"tba"`
	TwitchCount               *string                  `json:"twitch_count"`
	Updated                   *time.Time               `json:"updated"`
	Website                   *string                  `json:"website"`
	YoutubeCount              *string                  `json:"youtube_count"`
}
