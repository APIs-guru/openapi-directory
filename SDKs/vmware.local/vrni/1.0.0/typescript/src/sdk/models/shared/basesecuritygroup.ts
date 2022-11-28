import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSet } from "./ruleset";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";



export class BaseSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direct_destination_rules", elemType: RuleSet })
  directDestinationRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=direct_members", elemType: Reference })
  directMembers?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=direct_source_rules", elemType: RuleSet })
  directSourceRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=excluded_members", elemType: Reference })
  excludedMembers?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=indirect_destination_rules", elemType: RuleSet })
  indirectDestinationRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=indirect_source_rules", elemType: RuleSet })
  indirectSourceRules?: RuleSet[];

  @SpeakeasyMetadata({ data: "json, name=members", elemType: Reference })
  members?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parents", elemType: Reference })
  parents?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=translated_vm_count" })
  translatedVmCount?: number;

  @SpeakeasyMetadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
