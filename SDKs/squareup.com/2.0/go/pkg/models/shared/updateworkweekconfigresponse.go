package shared

type UpdateWorkweekConfigResponse struct {
	Errors         []Error         `json:"errors"`
	WorkweekConfig *WorkweekConfig `json:"workweek_config"`
}
