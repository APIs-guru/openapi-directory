package shared

import (
	"time"
)

type Lookup struct {
	Created             *time.Time  `json:"created"`
	Description         *string     `json:"description"`
	DescriptionFriendly *string     `json:"descriptionFriendly"`
	DisplayOrder        *int64      `json:"displayOrder"`
	ID                  *int64      `json:"id"`
	LastUpdate          *time.Time  `json:"lastUpdate"`
	LookupType          *LookupType `json:"lookupType"`
	Value               *string     `json:"value"`
}
