package shared

type Agent struct {
	Arch           *string                `json:"arch"`
	ClientID       *string                `json:"client_id"`
	Connected      *bool                  `json:"connected"`
	CreatedAt      *int64                 `json:"created_at"`
	DeactivatedAt  *int64                 `json:"deactivated_at"`
	ExternalIP     *string                `json:"external_ip"`
	HostID         *string                `json:"host_id"`
	HubID          *string                `json:"hub_id"`
	ID             string                 `json:"id"`
	Inactive       *bool                  `json:"inactive"`
	InternalIP     *string                `json:"internal_ip"`
	LastCheckin    *int64                 `json:"last_checkin"`
	Name           *string                `json:"name"`
	OrganizationID *string                `json:"organization_id"`
	Os             *string                `json:"os"`
	SiteID         *string                `json:"site_id"`
	SystemInfo     map[string]interface{} `json:"system_info"`
	UpdatedAt      *int64                 `json:"updated_at"`
	Version        *string                `json:"version"`
}
