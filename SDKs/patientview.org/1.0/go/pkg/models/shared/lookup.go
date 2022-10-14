package shared

import (
	"time"
)

type Lookup struct {
	Created             *time.Time  `json:"created,omitempty"`
	Description         *string     `json:"description,omitempty"`
	DescriptionFriendly *string     `json:"descriptionFriendly,omitempty"`
	DisplayOrder        *int64      `json:"displayOrder,omitempty"`
	ID                  *int64      `json:"id,omitempty"`
	LastUpdate          *time.Time  `json:"lastUpdate,omitempty"`
	LookupType          *LookupType `json:"lookupType,omitempty"`
	Value               *string     `json:"value,omitempty"`
}
