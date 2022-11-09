import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSet } from "./ruleset";
import { RuleSet } from "./ruleset";
import { EntityTypeEnum } from "./entitytypeenum";
import { RuleSet } from "./ruleset";
import { RuleSet } from "./ruleset";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";


export class BaseIpSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=direct_destination_rules", elemType: shared.RuleSet })
  directDestinationRules?: RuleSet[];

  @Metadata({ data: "json, name=direct_source_rules", elemType: shared.RuleSet })
  directSourceRules?: RuleSet[];

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=indirect_destination_rules", elemType: shared.RuleSet })
  indirectDestinationRules?: RuleSet[];

  @Metadata({ data: "json, name=indirect_source_rules", elemType: shared.RuleSet })
  indirectSourceRules?: RuleSet[];

  @Metadata({ data: "json, name=ip_addresses", elemType: shared.IpV4Address })
  ipAddresses?: IpV4Address[];

  @Metadata({ data: "json, name=ip_numeric_ranges" })
  ipNumericRanges?: any[];

  @Metadata({ data: "json, name=ip_ranges" })
  ipRanges?: any[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_security_groups", elemType: shared.Reference })
  parentSecurityGroups?: Reference[];

  @Metadata({ data: "json, name=translated_vm_count" })
  translatedVmCount?: number;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;

  @Metadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
