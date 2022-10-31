package shared



type UpdateWorkweekConfigResponse struct {
    Errors []Error `json:"errors,omitempty"`
    WorkweekConfig *WorkweekConfig `json:"workweek_config,omitempty"`
    
}

