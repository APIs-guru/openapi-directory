package shared

import (
	"time"
)

type DashboardGetResponseSchema struct {
	ChangedBy               *User      `json:"changed_by,omitempty"`
	ChangedByName           *string    `json:"changed_by_name,omitempty"`
	ChangedByURL            *string    `json:"changed_by_url,omitempty"`
	ChangedOn               *time.Time `json:"changed_on,omitempty"`
	ChangedOnDeltaHumanized *string    `json:"changed_on_delta_humanized,omitempty"`
	Charts                  []string   `json:"charts,omitempty"`
	CSS                     *string    `json:"css,omitempty"`
	DashboardTitle          *string    `json:"dashboard_title,omitempty"`
	ID                      *int32     `json:"id,omitempty"`
	JSONMetadata            *string    `json:"json_metadata,omitempty"`
	Owners                  []User     `json:"owners,omitempty"`
	PositionJSON            *string    `json:"position_json,omitempty"`
	Published               *bool      `json:"published,omitempty"`
	Roles                   []Roles    `json:"roles,omitempty"`
	Slug                    *string    `json:"slug,omitempty"`
	TableNames              *string    `json:"table_names,omitempty"`
	ThumbnailURL            *string    `json:"thumbnail_url,omitempty"`
	URL                     *string    `json:"url,omitempty"`
}
