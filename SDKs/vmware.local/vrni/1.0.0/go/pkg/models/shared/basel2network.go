package shared



type BaseL2Network struct {
    EntityID *string `json:"entity_id,omitempty"`
    EntityType *EntityTypeEnum `json:"entity_type,omitempty"`
    Gateways []string `json:"gateways,omitempty"`
    Name *string `json:"name,omitempty"`
    NetworkAddresses []string `json:"network_addresses,omitempty"`
    
}

