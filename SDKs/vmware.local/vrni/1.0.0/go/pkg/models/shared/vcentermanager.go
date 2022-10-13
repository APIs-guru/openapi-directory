package shared

type VCenterManager struct {
	EntityID   *string         `json:"entity_id"`
	EntityType *EntityTypeEnum `json:"entity_type"`
	Fqdn       *string         `json:"fqdn"`
	IPAddress  *IPV4Address    `json:"ip_address"`
	Name       *string         `json:"name"`
	NsxManager *Reference      `json:"nsx_manager"`
	VM         *Reference      `json:"vm"`
}
