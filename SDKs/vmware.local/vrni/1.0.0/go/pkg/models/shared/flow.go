package shared

type Flow struct {
	DestinationCluster        *Reference           `json:"destination_cluster"`
	DestinationDatacenter     *Reference           `json:"destination_datacenter"`
	DestinationFolders        []Reference          `json:"destination_folders"`
	DestinationHost           *Reference           `json:"destination_host"`
	DestinationIP             *IPV4Address         `json:"destination_ip"`
	DestinationIPSets         []Reference          `json:"destination_ip_sets"`
	DestinationL2Network      *Reference           `json:"destination_l2_network"`
	DestinationResourcePool   *Reference           `json:"destination_resource_pool"`
	DestinationSecurityGroups []Reference          `json:"destination_security_groups"`
	DestinationSecurityTags   []Reference          `json:"destination_security_tags"`
	DestinationVM             *Reference           `json:"destination_vm"`
	DestinationVMTags         []string             `json:"destination_vm_tags"`
	DestinationVnic           *Reference           `json:"destination_vnic"`
	DestinationVpc            *Reference           `json:"destination_vpc"`
	EntityID                  *string              `json:"entity_id"`
	EntityType                *EntityTypeEnum      `json:"entity_type"`
	FirewallAction            *FirewallActionEnum  `json:"firewall_action"`
	FlowTag                   []FlowTagEnum        `json:"flow_tag"`
	Name                      *string              `json:"name"`
	Port                      *PortRange           `json:"port"`
	Protocol                  *ProtocolEnum        `json:"protocol"`
	SourceCluster             *Reference           `json:"source_cluster"`
	SourceDatacenter          *Reference           `json:"source_datacenter"`
	SourceFolders             []Reference          `json:"source_folders"`
	SourceHost                *Reference           `json:"source_host"`
	SourceIP                  *IPV4Address         `json:"source_ip"`
	SourceIPSets              []Reference          `json:"source_ip_sets"`
	SourceL2Network           *Reference           `json:"source_l2_network"`
	SourceResourcePool        *Reference           `json:"source_resource_pool"`
	SourceSecurityGroups      []Reference          `json:"source_security_groups"`
	SourceSecurityTags        []Reference          `json:"source_security_tags"`
	SourceVM                  *Reference           `json:"source_vm"`
	SourceVMTags              []string             `json:"source_vm_tags"`
	SourceVnic                *Reference           `json:"source_vnic"`
	SourceVpc                 *Reference           `json:"source_vpc"`
	TrafficType               *FlowTrafficTypeEnum `json:"traffic_type"`
	WithinHost                *bool                `json:"within_host"`
}
