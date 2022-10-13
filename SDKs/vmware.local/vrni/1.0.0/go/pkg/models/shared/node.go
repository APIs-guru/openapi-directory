package shared

type NodeNodeTypeEnum string

const (
	NodeNodeTypeEnumProxyVM    NodeNodeTypeEnum = "PROXY_VM"
	NodeNodeTypeEnumPlatformVM NodeNodeTypeEnum = "PLATFORM_VM"
)

type Node struct {
	EntityType *NodeTypeEnum     `json:"entity_type"`
	ID         *string           `json:"id"`
	IPAddress  *string           `json:"ip_address"`
	Name       *string           `json:"name"`
	NodeID     *string           `json:"node_id"`
	NodeType   *NodeNodeTypeEnum `json:"node_type"`
}
