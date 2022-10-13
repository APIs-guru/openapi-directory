package shared

type Asset struct {
	Addresses             []string                     `json:"addresses"`
	AddressesExtra        []string                     `json:"addresses_extra"`
	AgentName             *string                      `json:"agent_name"`
	Alive                 *bool                        `json:"alive"`
	Attributes            map[string]string            `json:"attributes"`
	Comments              *string                      `json:"comments"`
	CreatedAt             *int64                       `json:"created_at"`
	Credentials           map[string]string            `json:"credentials"`
	DetectedBy            *string                      `json:"detected_by"`
	Domains               []string                     `json:"domains"`
	FirstSeen             *int64                       `json:"first_seen"`
	Hw                    *string                      `json:"hw"`
	ID                    string                       `json:"id"`
	LastAgentID           *string                      `json:"last_agent_id"`
	LastSeen              *int64                       `json:"last_seen"`
	LastTaskID            *string                      `json:"last_task_id"`
	LowestRtt             *int64                       `json:"lowest_rtt"`
	LowestTTL             *int64                       `json:"lowest_ttl"`
	MacVendors            []string                     `json:"mac_vendors"`
	Macs                  []string                     `json:"macs"`
	Names                 []string                     `json:"names"`
	NewestMac             *string                      `json:"newest_mac"`
	NewestMacAge          *int64                       `json:"newest_mac_age"`
	NewestMacVendor       *string                      `json:"newest_mac_vendor"`
	OrgName               *string                      `json:"org_name"`
	OrganizationID        *string                      `json:"organization_id"`
	Os                    *string                      `json:"os"`
	OsVersion             *string                      `json:"os_version"`
	Rtts                  map[string]interface{}       `json:"rtts"`
	ServiceCount          *int64                       `json:"service_count"`
	ServiceCountArp       *int64                       `json:"service_count_arp"`
	ServiceCountIcmp      *int64                       `json:"service_count_icmp"`
	ServiceCountTCP       *int64                       `json:"service_count_tcp"`
	ServiceCountUDP       *int64                       `json:"service_count_udp"`
	ServicePortsProducts  []string                     `json:"service_ports_products"`
	ServicePortsProtocols []string                     `json:"service_ports_protocols"`
	ServicePortsTCP       []string                     `json:"service_ports_tcp"`
	ServicePortsUDP       []string                     `json:"service_ports_udp"`
	Services              map[string]map[string]string `json:"services"`
	SiteID                *string                      `json:"site_id"`
	SiteName              *string                      `json:"site_name"`
	Tags                  map[string]string            `json:"tags"`
	Type                  *string                      `json:"type"`
	UpdatedAt             *int64                       `json:"updated_at"`
}
