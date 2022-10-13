package shared

import (
	"time"
)

type TagTagTaggedItemTaggedItem struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type TagTagTag struct {
	Created    *time.Time                  `json:"Created"`
	TaggedItem *TagTagTaggedItemTaggedItem `json:"TaggedItem"`
	Text       *string                     `json:"Text"`
}

type Tag struct {
	Tag *TagTagTag `json:"Tag"`
}
