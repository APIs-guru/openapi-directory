package shared

type DashboardRestAPIPut struct {
	CSS            *string `json:"css"`
	DashboardTitle *string `json:"dashboard_title"`
	JSONMetadata   *string `json:"json_metadata"`
	Owners         []int32 `json:"owners"`
	PositionJSON   *string `json:"position_json"`
	Published      *bool   `json:"published"`
	Roles          []int32 `json:"roles"`
	Slug           *string `json:"slug"`
}
