package shared

type Vmknic struct {
	EntityID      *string         `json:"entity_id,omitempty"`
	EntityType    *EntityTypeEnum `json:"entity_type,omitempty"`
	Host          *Reference      `json:"host,omitempty"`
	IPAddresses   []IPV4Address   `json:"ip_addresses,omitempty"`
	Layer2Network *Reference      `json:"layer2_network,omitempty"`
	Name          *string         `json:"name,omitempty"`
	Vlan          *Vlan           `json:"vlan,omitempty"`
}
