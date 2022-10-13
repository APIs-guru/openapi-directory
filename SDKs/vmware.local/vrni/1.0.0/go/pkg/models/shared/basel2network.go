package shared

type BaseL2Network struct {
	EntityID         *string         `json:"entity_id"`
	EntityType       *EntityTypeEnum `json:"entity_type"`
	Gateways         []string        `json:"gateways"`
	Name             *string         `json:"name"`
	NetworkAddresses []string        `json:"network_addresses"`
}
