package shared



type Agent struct {
    Arch *string `json:"arch,omitempty"`
    ClientID *string `json:"client_id,omitempty"`
    Connected *bool `json:"connected,omitempty"`
    CreatedAt *int64 `json:"created_at,omitempty"`
    DeactivatedAt *int64 `json:"deactivated_at,omitempty"`
    ExternalIP *string `json:"external_ip,omitempty"`
    HostID *string `json:"host_id,omitempty"`
    HubID *string `json:"hub_id,omitempty"`
    ID string `json:"id"`
    Inactive *bool `json:"inactive,omitempty"`
    InternalIP *string `json:"internal_ip,omitempty"`
    LastCheckin *int64 `json:"last_checkin,omitempty"`
    Name *string `json:"name,omitempty"`
    OrganizationID *string `json:"organization_id,omitempty"`
    Os *string `json:"os,omitempty"`
    SiteID *string `json:"site_id,omitempty"`
    SystemInfo map[string]interface{} `json:"system_info,omitempty"`
    UpdatedAt *int64 `json:"updated_at,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

