package shared

import (
"time")

type Twitch struct {
    Created *time.Time `json:"created,omitempty"`
    Description *string `json:"description,omitempty"`
    ExternalID *int64 `json:"external_id,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Language *string `json:"language,omitempty"`
    Name *string `json:"name,omitempty"`
    Published *time.Time `json:"published,omitempty"`
    Thumbnail *string `json:"thumbnail,omitempty"`
    ViewCount *int64 `json:"view_count,omitempty"`
    
}

