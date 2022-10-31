package shared

import (
"time")

type TagTagTaggedItem struct {
    AtHref *string `json:"@href,omitempty"`
    AtRel *string `json:"@rel,omitempty"`
    AtTitle *string `json:"@title,omitempty"`
    
}

type TagTag struct {
    Created *time.Time `json:"Created,omitempty"`
    TaggedItem *TagTagTaggedItem `json:"TaggedItem,omitempty"`
    Text *string `json:"Text,omitempty"`
    
}

type Tag struct {
    Tag *TagTag `json:"Tag,omitempty"`
    
}

