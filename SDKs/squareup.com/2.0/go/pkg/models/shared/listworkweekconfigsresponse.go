package shared

type ListWorkweekConfigsResponse struct {
	Cursor          *string          `json:"cursor"`
	Errors          []Error          `json:"errors"`
	WorkweekConfigs []WorkweekConfig `json:"workweek_configs"`
}
