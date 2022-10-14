package shared

import (
	"time"
)

type TagTagTaggedItemTaggedItem struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type TagTagTag struct {
	Created    *time.Time                  `json:"Created,omitempty"`
	TaggedItem *TagTagTaggedItemTaggedItem `json:"TaggedItem,omitempty"`
	Text       *string                     `json:"Text,omitempty"`
}

type Tag struct {
	Tag *TagTagTag `json:"Tag,omitempty"`
}
