package shared

import (
	"time"
)

type EventsV1Schema struct {
	ID                       *string                `json:"id"`
	LatestVersion            *int64                 `json:"latest_version"`
	LatestVersionDateCreated *time.Time             `json:"latest_version_date_created"`
	Links                    map[string]interface{} `json:"links"`
	URL                      *string                `json:"url"`
}
