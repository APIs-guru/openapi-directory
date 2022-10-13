package shared

type BaseVnic struct {
	EntityID      *string         `json:"entity_id"`
	EntityType    *EntityTypeEnum `json:"entity_type"`
	IPAddresses   []IPV4Address   `json:"ip_addresses"`
	Layer2Network *Reference      `json:"layer2_network"`
	Name          *string         `json:"name"`
	Vlan          *Vlan           `json:"vlan"`
	VM            *Reference      `json:"vm"`
}
