package shared



type V3RunsResponse struct {
    Runs []V3Run `json:"runs,omitempty"`
    Status *V3Status `json:"status,omitempty"`
    
}

