package shared




type NodeNodeTypeEnum string

const (
    NodeNodeTypeEnumProxyVM NodeNodeTypeEnum = "PROXY_VM"
NodeNodeTypeEnumPlatformVM NodeNodeTypeEnum = "PLATFORM_VM"
)


type Node struct {
    EntityType *NodeTypeEnum `json:"entity_type,omitempty"`
    ID *string `json:"id,omitempty"`
    IPAddress *string `json:"ip_address,omitempty"`
    Name *string `json:"name,omitempty"`
    NodeID *string `json:"node_id,omitempty"`
    NodeType *NodeNodeTypeEnum `json:"node_type,omitempty"`
    
}

