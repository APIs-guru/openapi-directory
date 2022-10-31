package shared



type AssetServiceNow struct {
    AddressesExtra *string `json:"addresses_extra,omitempty"`
    AddressesScope *string `json:"addresses_scope,omitempty"`
    Alive *bool `json:"alive,omitempty"`
    AssetID string `json:"asset_id"`
    Comments *string `json:"comments,omitempty"`
    DetectedBy *string `json:"detected_by,omitempty"`
    Domains *string `json:"domains,omitempty"`
    FirstDiscovered *string `json:"first_discovered,omitempty"`
    HwProduct *string `json:"hw_product,omitempty"`
    HwVendor *string `json:"hw_vendor,omitempty"`
    HwVersion *string `json:"hw_version,omitempty"`
    IPAddress *string `json:"ip_address,omitempty"`
    LastDiscovered *string `json:"last_discovered,omitempty"`
    LastUpdated *string `json:"last_updated,omitempty"`
    LowestRtt *int64 `json:"lowest_rtt,omitempty"`
    LowestTTL *int64 `json:"lowest_ttl,omitempty"`
    MacAddress *string `json:"mac_address,omitempty"`
    MacManufacturer *string `json:"mac_manufacturer,omitempty"`
    MacVendors *string `json:"mac_vendors,omitempty"`
    Macs *string `json:"macs,omitempty"`
    Name *string `json:"name,omitempty"`
    NewestMacAge *string `json:"newest_mac_age,omitempty"`
    Organization *string `json:"organization,omitempty"`
    OsProduct *string `json:"os_product,omitempty"`
    OsVendor *string `json:"os_vendor,omitempty"`
    OsVersion *string `json:"os_version,omitempty"`
    ServiceCount *int64 `json:"service_count,omitempty"`
    ServiceCountArp *int64 `json:"service_count_arp,omitempty"`
    ServiceCountIcmp *int64 `json:"service_count_icmp,omitempty"`
    ServiceCountTCP *int64 `json:"service_count_tcp,omitempty"`
    ServiceCountUDP *int64 `json:"service_count_udp,omitempty"`
    Site *string `json:"site,omitempty"`
    SysClassName *string `json:"sys_class_name,omitempty"`
    Tags *string `json:"tags,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

