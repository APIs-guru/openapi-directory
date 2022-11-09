import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { FirewallActionEnum } from "./firewallactionenum";
import { FlowTagEnum } from "./flowtagenum";
import { PortRange } from "./portrange";
import { ProtocolEnum } from "./protocolenum";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { FlowTrafficTypeEnum } from "./flowtraffictypeenum";


export class Flow extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination_cluster" })
  destinationCluster?: Reference;

  @Metadata({ data: "json, name=destination_datacenter" })
  destinationDatacenter?: Reference;

  @Metadata({ data: "json, name=destination_folders", elemType: shared.Reference })
  destinationFolders?: Reference[];

  @Metadata({ data: "json, name=destination_host" })
  destinationHost?: Reference;

  @Metadata({ data: "json, name=destination_ip" })
  destinationIp?: IpV4Address;

  @Metadata({ data: "json, name=destination_ip_sets", elemType: shared.Reference })
  destinationIpSets?: Reference[];

  @Metadata({ data: "json, name=destination_l2_network" })
  destinationL2Network?: Reference;

  @Metadata({ data: "json, name=destination_resource_pool" })
  destinationResourcePool?: Reference;

  @Metadata({ data: "json, name=destination_security_groups", elemType: shared.Reference })
  destinationSecurityGroups?: Reference[];

  @Metadata({ data: "json, name=destination_security_tags", elemType: shared.Reference })
  destinationSecurityTags?: Reference[];

  @Metadata({ data: "json, name=destination_vm" })
  destinationVm?: Reference;

  @Metadata({ data: "json, name=destination_vm_tags" })
  destinationVmTags?: string[];

  @Metadata({ data: "json, name=destination_vnic" })
  destinationVnic?: Reference;

  @Metadata({ data: "json, name=destination_vpc" })
  destinationVpc?: Reference;

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=firewall_action" })
  firewallAction?: FirewallActionEnum;

  @Metadata({ data: "json, name=flow_tag" })
  flowTag?: FlowTagEnum[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=port" })
  port?: PortRange;

  @Metadata({ data: "json, name=protocol" })
  protocol?: ProtocolEnum;

  @Metadata({ data: "json, name=source_cluster" })
  sourceCluster?: Reference;

  @Metadata({ data: "json, name=source_datacenter" })
  sourceDatacenter?: Reference;

  @Metadata({ data: "json, name=source_folders", elemType: shared.Reference })
  sourceFolders?: Reference[];

  @Metadata({ data: "json, name=source_host" })
  sourceHost?: Reference;

  @Metadata({ data: "json, name=source_ip" })
  sourceIp?: IpV4Address;

  @Metadata({ data: "json, name=source_ip_sets", elemType: shared.Reference })
  sourceIpSets?: Reference[];

  @Metadata({ data: "json, name=source_l2_network" })
  sourceL2Network?: Reference;

  @Metadata({ data: "json, name=source_resource_pool" })
  sourceResourcePool?: Reference;

  @Metadata({ data: "json, name=source_security_groups", elemType: shared.Reference })
  sourceSecurityGroups?: Reference[];

  @Metadata({ data: "json, name=source_security_tags", elemType: shared.Reference })
  sourceSecurityTags?: Reference[];

  @Metadata({ data: "json, name=source_vm" })
  sourceVm?: Reference;

  @Metadata({ data: "json, name=source_vm_tags" })
  sourceVmTags?: string[];

  @Metadata({ data: "json, name=source_vnic" })
  sourceVnic?: Reference;

  @Metadata({ data: "json, name=source_vpc" })
  sourceVpc?: Reference;

  @Metadata({ data: "json, name=traffic_type" })
  trafficType?: FlowTrafficTypeEnum;

  @Metadata({ data: "json, name=within_host" })
  withinHost?: boolean;
}
