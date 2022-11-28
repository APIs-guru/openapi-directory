import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSet } from "./ruleset";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";



export class BaseVirtualMachine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default_gateway" })
  defaultGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_firewall_rules", elemType: RuleSet })
  destinationFirewallRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ip_addresses", elemType: IpV4Address })
  ipAddresses?: IpV4Address[];

  @SpeakeasyMetadata({ data: "json, name=ip_sets", elemType: Reference })
  ipSets?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=security_groups", elemType: Reference })
  securityGroups?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=source_firewall_rules", elemType: RuleSet })
  sourceFirewallRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=vnics", elemType: Reference })
  vnics?: Reference[];
}
