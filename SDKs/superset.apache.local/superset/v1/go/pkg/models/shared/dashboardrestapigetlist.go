package shared

type DashboardRestAPIGetList struct {
	ChangedBy               *Meta15      `json:"changed_by,omitempty"`
	ChangedByName           *interface{} `json:"changed_by_name,omitempty"`
	ChangedByURL            *interface{} `json:"changed_by_url,omitempty"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized,omitempty"`
	ChangedOnUtc            *interface{} `json:"changed_on_utc,omitempty"`
	CreatedBy               *Meta14      `json:"created_by,omitempty"`
	CSS                     *string      `json:"css,omitempty"`
	DashboardTitle          *string      `json:"dashboard_title,omitempty"`
	ID                      *int32       `json:"id,omitempty"`
	JSONMetadata            *string      `json:"json_metadata,omitempty"`
	Owners                  *Meta17      `json:"owners,omitempty"`
	PositionJSON            *string      `json:"position_json,omitempty"`
	Published               *bool        `json:"published,omitempty"`
	Roles                   *Meta16      `json:"roles,omitempty"`
	Slug                    *string      `json:"slug,omitempty"`
	Status                  *interface{} `json:"status,omitempty"`
	ThumbnailURL            *interface{} `json:"thumbnail_url,omitempty"`
	URL                     *interface{} `json:"url,omitempty"`
}
