package shared

type DashboardRestAPIPost struct {
	CSS            *string `json:"css,omitempty"`
	DashboardTitle *string `json:"dashboard_title,omitempty"`
	JSONMetadata   *string `json:"json_metadata,omitempty"`
	Owners         []int32 `json:"owners,omitempty"`
	PositionJSON   *string `json:"position_json,omitempty"`
	Published      *bool   `json:"published,omitempty"`
	Roles          []int32 `json:"roles,omitempty"`
	Slug           *string `json:"slug,omitempty"`
}
