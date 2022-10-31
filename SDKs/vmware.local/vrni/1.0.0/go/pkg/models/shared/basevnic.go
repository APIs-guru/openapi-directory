package shared

type BaseVnic struct {
	EntityID      *string         `json:"entity_id,omitempty"`
	EntityType    *EntityTypeEnum `json:"entity_type,omitempty"`
	IPAddresses   []IPV4Address   `json:"ip_addresses,omitempty"`
	Layer2Network *Reference      `json:"layer2_network,omitempty"`
	Name          *string         `json:"name,omitempty"`
	Vlan          *Vlan           `json:"vlan,omitempty"`
	VM            *Reference      `json:"vm,omitempty"`
}
