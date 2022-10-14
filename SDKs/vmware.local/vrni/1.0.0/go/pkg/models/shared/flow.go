package shared

type Flow struct {
	DestinationCluster        *Reference           `json:"destination_cluster,omitempty"`
	DestinationDatacenter     *Reference           `json:"destination_datacenter,omitempty"`
	DestinationFolders        []Reference          `json:"destination_folders,omitempty"`
	DestinationHost           *Reference           `json:"destination_host,omitempty"`
	DestinationIP             *IPV4Address         `json:"destination_ip,omitempty"`
	DestinationIPSets         []Reference          `json:"destination_ip_sets,omitempty"`
	DestinationL2Network      *Reference           `json:"destination_l2_network,omitempty"`
	DestinationResourcePool   *Reference           `json:"destination_resource_pool,omitempty"`
	DestinationSecurityGroups []Reference          `json:"destination_security_groups,omitempty"`
	DestinationSecurityTags   []Reference          `json:"destination_security_tags,omitempty"`
	DestinationVM             *Reference           `json:"destination_vm,omitempty"`
	DestinationVMTags         []string             `json:"destination_vm_tags,omitempty"`
	DestinationVnic           *Reference           `json:"destination_vnic,omitempty"`
	DestinationVpc            *Reference           `json:"destination_vpc,omitempty"`
	EntityID                  *string              `json:"entity_id,omitempty"`
	EntityType                *EntityTypeEnum      `json:"entity_type,omitempty"`
	FirewallAction            *FirewallActionEnum  `json:"firewall_action,omitempty"`
	FlowTag                   []FlowTagEnum        `json:"flow_tag,omitempty"`
	Name                      *string              `json:"name,omitempty"`
	Port                      *PortRange           `json:"port,omitempty"`
	Protocol                  *ProtocolEnum        `json:"protocol,omitempty"`
	SourceCluster             *Reference           `json:"source_cluster,omitempty"`
	SourceDatacenter          *Reference           `json:"source_datacenter,omitempty"`
	SourceFolders             []Reference          `json:"source_folders,omitempty"`
	SourceHost                *Reference           `json:"source_host,omitempty"`
	SourceIP                  *IPV4Address         `json:"source_ip,omitempty"`
	SourceIPSets              []Reference          `json:"source_ip_sets,omitempty"`
	SourceL2Network           *Reference           `json:"source_l2_network,omitempty"`
	SourceResourcePool        *Reference           `json:"source_resource_pool,omitempty"`
	SourceSecurityGroups      []Reference          `json:"source_security_groups,omitempty"`
	SourceSecurityTags        []Reference          `json:"source_security_tags,omitempty"`
	SourceVM                  *Reference           `json:"source_vm,omitempty"`
	SourceVMTags              []string             `json:"source_vm_tags,omitempty"`
	SourceVnic                *Reference           `json:"source_vnic,omitempty"`
	SourceVpc                 *Reference           `json:"source_vpc,omitempty"`
	TrafficType               *FlowTrafficTypeEnum `json:"traffic_type,omitempty"`
	WithinHost                *bool                `json:"within_host,omitempty"`
}
