import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSet } from "./ruleset";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";



export class BaseIpSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direct_destination_rules", elemType: RuleSet })
  directDestinationRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=direct_source_rules", elemType: RuleSet })
  directSourceRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=indirect_destination_rules", elemType: RuleSet })
  indirectDestinationRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=indirect_source_rules", elemType: RuleSet })
  indirectSourceRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=ip_addresses", elemType: IpV4Address })
  ipAddresses?: IpV4Address[];

  @SpeakeasyMetadata({ data: "json, name=ip_numeric_ranges" })
  ipNumericRanges?: any[];

  @SpeakeasyMetadata({ data: "json, name=ip_ranges" })
  ipRanges?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_security_groups", elemType: Reference })
  parentSecurityGroups?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=translated_vm_count" })
  translatedVmCount?: number;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
