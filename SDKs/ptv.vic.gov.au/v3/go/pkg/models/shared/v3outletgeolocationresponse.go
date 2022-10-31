package shared



type V3OutletGeolocationResponse struct {
    Outlets []V3OutletGeolocation `json:"outlets,omitempty"`
    Status *V3Status `json:"status,omitempty"`
    
}

