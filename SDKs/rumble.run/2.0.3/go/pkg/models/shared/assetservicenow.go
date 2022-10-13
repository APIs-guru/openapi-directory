package shared

type AssetServiceNow struct {
	AddressesExtra   *string `json:"addresses_extra"`
	AddressesScope   *string `json:"addresses_scope"`
	Alive            *bool   `json:"alive"`
	AssetID          string  `json:"asset_id"`
	Comments         *string `json:"comments"`
	DetectedBy       *string `json:"detected_by"`
	Domains          *string `json:"domains"`
	FirstDiscovered  *string `json:"first_discovered"`
	HwProduct        *string `json:"hw_product"`
	HwVendor         *string `json:"hw_vendor"`
	HwVersion        *string `json:"hw_version"`
	IPAddress        *string `json:"ip_address"`
	LastDiscovered   *string `json:"last_discovered"`
	LastUpdated      *string `json:"last_updated"`
	LowestRtt        *int64  `json:"lowest_rtt"`
	LowestTTL        *int64  `json:"lowest_ttl"`
	MacAddress       *string `json:"mac_address"`
	MacManufacturer  *string `json:"mac_manufacturer"`
	MacVendors       *string `json:"mac_vendors"`
	Macs             *string `json:"macs"`
	Name             *string `json:"name"`
	NewestMacAge     *string `json:"newest_mac_age"`
	Organization     *string `json:"organization"`
	OsProduct        *string `json:"os_product"`
	OsVendor         *string `json:"os_vendor"`
	OsVersion        *string `json:"os_version"`
	ServiceCount     *int64  `json:"service_count"`
	ServiceCountArp  *int64  `json:"service_count_arp"`
	ServiceCountIcmp *int64  `json:"service_count_icmp"`
	ServiceCountTCP  *int64  `json:"service_count_tcp"`
	ServiceCountUDP  *int64  `json:"service_count_udp"`
	Site             *string `json:"site"`
	SysClassName     *string `json:"sys_class_name"`
	Tags             *string `json:"tags"`
	Type             *string `json:"type"`
}
