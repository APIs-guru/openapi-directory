package shared

type Wireless struct {
	AgentName      *string           `json:"agent_name"`
	Authentication *string           `json:"authentication"`
	Bssid          *string           `json:"bssid"`
	Channels       *string           `json:"channels"`
	CreatedAt      *int64            `json:"created_at"`
	Data           map[string]string `json:"data"`
	Encryption     *string           `json:"encryption"`
	Essid          *string           `json:"essid"`
	Family         *string           `json:"family"`
	ID             string            `json:"id"`
	Interface      *string           `json:"interface"`
	LastAgentID    *string           `json:"last_agent_id"`
	LastSeen       *int64            `json:"last_seen"`
	LastTaskID     *string           `json:"last_task_id"`
	OrgName        *string           `json:"org_name"`
	OrganizationID *string           `json:"organization_id"`
	Signal         *int64            `json:"signal"`
	SiteID         *string           `json:"site_id"`
	SiteName       *string           `json:"site_name"`
	Type           *string           `json:"type"`
	Vendor         *string           `json:"vendor"`
}
