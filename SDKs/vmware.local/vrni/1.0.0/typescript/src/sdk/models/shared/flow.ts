import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { IpV4Address } from "./ipv4address";
import { EntityTypeEnum } from "./entitytypeenum";
import { FirewallActionEnum } from "./firewallactionenum";
import { FlowTagEnum } from "./flowtagenum";
import { PortRange } from "./portrange";
import { ProtocolEnum } from "./protocolenum";
import { FlowTrafficTypeEnum } from "./flowtraffictypeenum";



export class Flow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination_cluster" })
  destinationCluster?: Reference;

  @SpeakeasyMetadata({ data: "json, name=destination_datacenter" })
  destinationDatacenter?: Reference;

  @SpeakeasyMetadata({ data: "json, name=destination_folders", elemType: Reference })
  destinationFolders?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=destination_host" })
  destinationHost?: Reference;

  @SpeakeasyMetadata({ data: "json, name=destination_ip" })
  destinationIp?: IpV4Address;

  @SpeakeasyMetadata({ data: "json, name=destination_ip_sets", elemType: Reference })
  destinationIpSets?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=destination_l2_network" })
  destinationL2Network?: Reference;

  @SpeakeasyMetadata({ data: "json, name=destination_resource_pool" })
  destinationResourcePool?: Reference;

  @SpeakeasyMetadata({ data: "json, name=destination_security_groups", elemType: Reference })
  destinationSecurityGroups?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=destination_security_tags", elemType: Reference })
  destinationSecurityTags?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=destination_vm" })
  destinationVm?: Reference;

  @SpeakeasyMetadata({ data: "json, name=destination_vm_tags" })
  destinationVmTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=destination_vnic" })
  destinationVnic?: Reference;

  @SpeakeasyMetadata({ data: "json, name=destination_vpc" })
  destinationVpc?: Reference;

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=firewall_action" })
  firewallAction?: FirewallActionEnum;

  @SpeakeasyMetadata({ data: "json, name=flow_tag" })
  flowTag?: FlowTagEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: PortRange;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: ProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=source_cluster" })
  sourceCluster?: Reference;

  @SpeakeasyMetadata({ data: "json, name=source_datacenter" })
  sourceDatacenter?: Reference;

  @SpeakeasyMetadata({ data: "json, name=source_folders", elemType: Reference })
  sourceFolders?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=source_host" })
  sourceHost?: Reference;

  @SpeakeasyMetadata({ data: "json, name=source_ip" })
  sourceIp?: IpV4Address;

  @SpeakeasyMetadata({ data: "json, name=source_ip_sets", elemType: Reference })
  sourceIpSets?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=source_l2_network" })
  sourceL2Network?: Reference;

  @SpeakeasyMetadata({ data: "json, name=source_resource_pool" })
  sourceResourcePool?: Reference;

  @SpeakeasyMetadata({ data: "json, name=source_security_groups", elemType: Reference })
  sourceSecurityGroups?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=source_security_tags", elemType: Reference })
  sourceSecurityTags?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=source_vm" })
  sourceVm?: Reference;

  @SpeakeasyMetadata({ data: "json, name=source_vm_tags" })
  sourceVmTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=source_vnic" })
  sourceVnic?: Reference;

  @SpeakeasyMetadata({ data: "json, name=source_vpc" })
  sourceVpc?: Reference;

  @SpeakeasyMetadata({ data: "json, name=traffic_type" })
  trafficType?: FlowTrafficTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=within_host" })
  withinHost?: boolean;
}
