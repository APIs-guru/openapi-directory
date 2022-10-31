package shared



type V3OutletResponse struct {
    Outlets []V3Outlet `json:"outlets,omitempty"`
    Status *V3Status `json:"status,omitempty"`
    
}

