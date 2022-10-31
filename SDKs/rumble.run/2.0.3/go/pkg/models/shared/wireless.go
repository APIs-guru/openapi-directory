package shared



type Wireless struct {
    AgentName *string `json:"agent_name,omitempty"`
    Authentication *string `json:"authentication,omitempty"`
    Bssid *string `json:"bssid,omitempty"`
    Channels *string `json:"channels,omitempty"`
    CreatedAt *int64 `json:"created_at,omitempty"`
    Data map[string]string `json:"data,omitempty"`
    Encryption *string `json:"encryption,omitempty"`
    Essid *string `json:"essid,omitempty"`
    Family *string `json:"family,omitempty"`
    ID string `json:"id"`
    Interface *string `json:"interface,omitempty"`
    LastAgentID *string `json:"last_agent_id,omitempty"`
    LastSeen *int64 `json:"last_seen,omitempty"`
    LastTaskID *string `json:"last_task_id,omitempty"`
    OrgName *string `json:"org_name,omitempty"`
    OrganizationID *string `json:"organization_id,omitempty"`
    Signal *int64 `json:"signal,omitempty"`
    SiteID *string `json:"site_id,omitempty"`
    SiteName *string `json:"site_name,omitempty"`
    Type *string `json:"type,omitempty"`
    Vendor *string `json:"vendor,omitempty"`
    
}

