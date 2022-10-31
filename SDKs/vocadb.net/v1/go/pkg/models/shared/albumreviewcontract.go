package shared

import (
"time")

type AlbumReviewContract struct {
    AlbumID *int32 `json:"albumId,omitempty"`
    Date *time.Time `json:"date,omitempty"`
    ID *int32 `json:"id,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    Text *string `json:"text,omitempty"`
    Title *string `json:"title,omitempty"`
    User *UserForAPIContract `json:"user,omitempty"`
    
}

