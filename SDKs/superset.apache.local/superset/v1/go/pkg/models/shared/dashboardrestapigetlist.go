package shared

type DashboardRestAPIGetList struct {
	ChangedBy               *Meta15      `json:"changed_by"`
	ChangedByName           *interface{} `json:"changed_by_name"`
	ChangedByURL            *interface{} `json:"changed_by_url"`
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized"`
	ChangedOnUtc            *interface{} `json:"changed_on_utc"`
	CreatedBy               *Meta14      `json:"created_by"`
	CSS                     *string      `json:"css"`
	DashboardTitle          *string      `json:"dashboard_title"`
	ID                      *int32       `json:"id"`
	JSONMetadata            *string      `json:"json_metadata"`
	Owners                  *Meta17      `json:"owners"`
	PositionJSON            *string      `json:"position_json"`
	Published               *bool        `json:"published"`
	Roles                   *Meta16      `json:"roles"`
	Slug                    *string      `json:"slug"`
	Status                  *interface{} `json:"status"`
	ThumbnailURL            *interface{} `json:"thumbnail_url"`
	URL                     *interface{} `json:"url"`
}
