package shared

import (
	"time"
)

type DashboardGetResponseSchema struct {
	ChangedBy               *User      `json:"changed_by"`
	ChangedByName           *string    `json:"changed_by_name"`
	ChangedByURL            *string    `json:"changed_by_url"`
	ChangedOn               *time.Time `json:"changed_on"`
	ChangedOnDeltaHumanized *string    `json:"changed_on_delta_humanized"`
	Charts                  []string   `json:"charts"`
	CSS                     *string    `json:"css"`
	DashboardTitle          *string    `json:"dashboard_title"`
	ID                      *int32     `json:"id"`
	JSONMetadata            *string    `json:"json_metadata"`
	Owners                  []User     `json:"owners"`
	PositionJSON            *string    `json:"position_json"`
	Published               *bool      `json:"published"`
	Roles                   []Roles    `json:"roles"`
	Slug                    *string    `json:"slug"`
	TableNames              *string    `json:"table_names"`
	ThumbnailURL            *string    `json:"thumbnail_url"`
	URL                     *string    `json:"url"`
}
