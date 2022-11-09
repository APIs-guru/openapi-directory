import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSet } from "./ruleset";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
import { Reference } from "./reference";
import { RuleSet } from "./ruleset";
import { Reference } from "./reference";


export class BaseVirtualMachine extends SpeakeasyBase {
  @Metadata({ data: "json, name=default_gateway" })
  defaultGateway?: string;

  @Metadata({ data: "json, name=destination_firewall_rules", elemType: shared.RuleSet })
  destinationFirewallRules?: RuleSet[];

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=ip_addresses", elemType: shared.IpV4Address })
  ipAddresses?: IpV4Address[];

  @Metadata({ data: "json, name=ip_sets", elemType: shared.Reference })
  ipSets?: Reference[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=security_groups", elemType: shared.Reference })
  securityGroups?: Reference[];

  @Metadata({ data: "json, name=source_firewall_rules", elemType: shared.RuleSet })
  sourceFirewallRules?: RuleSet[];

  @Metadata({ data: "json, name=vnics", elemType: shared.Reference })
  vnics?: Reference[];
}
