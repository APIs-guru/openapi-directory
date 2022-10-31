package shared

import (
"time")

type Post struct {
    Content *string `json:"content,omitempty"`
    Date *time.Time `json:"date,omitempty"`
    Expiration *time.Time `json:"expiration,omitempty"`
    Footer *string `json:"footer,omitempty"`
    GroupID *string `json:"group_id,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    Outcome *string `json:"outcome,omitempty"`
    Photos []Photo `json:"photos,omitempty"`
    PostID *string `json:"post_id,omitempty"`
    Source *string `json:"source,omitempty"`
    Title *string `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    UserID *string `json:"user_id,omitempty"`
    
}

