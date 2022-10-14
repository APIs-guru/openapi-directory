package shared

type VCenterManager struct {
	EntityID   *string         `json:"entity_id,omitempty"`
	EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
	Fqdn       *string         `json:"fqdn,omitempty"`
	IPAddress  *IPV4Address    `json:"ip_address,omitempty"`
	Name       *string         `json:"name,omitempty"`
	NsxManager *Reference      `json:"nsx_manager,omitempty"`
	VM         *Reference      `json:"vm,omitempty"`
}
