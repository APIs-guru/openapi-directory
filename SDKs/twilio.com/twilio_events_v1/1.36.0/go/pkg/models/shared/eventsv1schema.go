package shared

import (
	"time"
)

type EventsV1Schema struct {
	ID                       *string                `json:"id,omitempty"`
	LatestVersion            *int64                 `json:"latest_version,omitempty"`
	LatestVersionDateCreated *time.Time             `json:"latest_version_date_created,omitempty"`
	Links                    map[string]interface{} `json:"links,omitempty"`
	URL                      *string                `json:"url,omitempty"`
}
