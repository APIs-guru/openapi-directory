package shared



type Service struct {
    Addresses []string `json:"addresses,omitempty"`
    AddressesExtra []string `json:"addresses_extra,omitempty"`
    AgentName *string `json:"agent_name,omitempty"`
    Alive *bool `json:"alive,omitempty"`
    Attributes map[string]string `json:"attributes,omitempty"`
    Comments *string `json:"comments,omitempty"`
    CreatedAt *int64 `json:"created_at,omitempty"`
    Credentials map[string]string `json:"credentials,omitempty"`
    DetectedBy *string `json:"detected_by,omitempty"`
    Domains []string `json:"domains,omitempty"`
    FirstSeen *int64 `json:"first_seen,omitempty"`
    Hw *string `json:"hw,omitempty"`
    ID string `json:"id"`
    LastAgentID *string `json:"last_agent_id,omitempty"`
    LastSeen *int64 `json:"last_seen,omitempty"`
    LastTaskID *string `json:"last_task_id,omitempty"`
    LowestRtt *int64 `json:"lowest_rtt,omitempty"`
    LowestTTL *int64 `json:"lowest_ttl,omitempty"`
    MacVendors []string `json:"mac_vendors,omitempty"`
    Macs []string `json:"macs,omitempty"`
    Names []string `json:"names,omitempty"`
    NewestMac *string `json:"newest_mac,omitempty"`
    NewestMacAge *int64 `json:"newest_mac_age,omitempty"`
    NewestMacVendor *string `json:"newest_mac_vendor,omitempty"`
    OrgName *string `json:"org_name,omitempty"`
    OrganizationID *string `json:"organization_id,omitempty"`
    Os *string `json:"os,omitempty"`
    OsVersion *string `json:"os_version,omitempty"`
    Rtts map[string]interface{} `json:"rtts,omitempty"`
    ServiceAddress *string `json:"service_address,omitempty"`
    ServiceAssetID *string `json:"service_asset_id,omitempty"`
    ServiceCount *int64 `json:"service_count,omitempty"`
    ServiceCountArp *int64 `json:"service_count_arp,omitempty"`
    ServiceCountIcmp *int64 `json:"service_count_icmp,omitempty"`
    ServiceCountTCP *int64 `json:"service_count_tcp,omitempty"`
    ServiceCountUDP *int64 `json:"service_count_udp,omitempty"`
    ServiceCreatedAt *int64 `json:"service_created_at,omitempty"`
    ServiceData map[string]string `json:"service_data,omitempty"`
    ServiceID string `json:"service_id"`
    ServiceLink *string `json:"service_link,omitempty"`
    ServicePort *string `json:"service_port,omitempty"`
    ServicePortsProducts []string `json:"service_ports_products,omitempty"`
    ServicePortsProtocols []string `json:"service_ports_protocols,omitempty"`
    ServicePortsTCP []string `json:"service_ports_tcp,omitempty"`
    ServicePortsUDP []string `json:"service_ports_udp,omitempty"`
    ServiceProtocol *string `json:"service_protocol,omitempty"`
    ServiceScreenshotLink *string `json:"service_screenshot_link,omitempty"`
    ServiceSummary *string `json:"service_summary,omitempty"`
    ServiceTransport *string `json:"service_transport,omitempty"`
    ServiceUpdatedAt *int64 `json:"service_updated_at,omitempty"`
    ServiceVhost *string `json:"service_vhost,omitempty"`
    Services map[string]map[string]string `json:"services,omitempty"`
    SiteID *string `json:"site_id,omitempty"`
    SiteName *string `json:"site_name,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Type *string `json:"type,omitempty"`
    UpdatedAt *int64 `json:"updated_at,omitempty"`
    
}

