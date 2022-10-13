package shared

import (
	"time"
)

type AlbumReviewContract struct {
	AlbumID      *int32              `json:"albumId"`
	Date         *time.Time          `json:"date"`
	ID           *int32              `json:"id"`
	LanguageCode *string             `json:"languageCode"`
	Text         *string             `json:"text"`
	Title        *string             `json:"title"`
	User         *UserForAPIContract `json:"user"`
}
