package shared



type ListWorkweekConfigsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    WorkweekConfigs []WorkweekConfig `json:"workweek_configs,omitempty"`
    
}

