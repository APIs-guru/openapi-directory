import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSet } from "./ruleset";
import { Reference } from "./reference";
import { RuleSet } from "./ruleset";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
import { RuleSet } from "./ruleset";
import { RuleSet } from "./ruleset";
import { Reference } from "./reference";
import { Reference } from "./reference";


export class BaseSecurityGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=direct_destination_rules", elemType: shared.RuleSet })
  directDestinationRules?: RuleSet[];

  @Metadata({ data: "json, name=direct_members", elemType: shared.Reference })
  directMembers?: Reference[];

  @Metadata({ data: "json, name=direct_source_rules", elemType: shared.RuleSet })
  directSourceRules?: RuleSet[];

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=excluded_members", elemType: shared.Reference })
  excludedMembers?: Reference[];

  @Metadata({ data: "json, name=indirect_destination_rules", elemType: shared.RuleSet })
  indirectDestinationRules?: RuleSet[];

  @Metadata({ data: "json, name=indirect_source_rules", elemType: shared.RuleSet })
  indirectSourceRules?: RuleSet[];

  @Metadata({ data: "json, name=members", elemType: shared.Reference })
  members?: Reference[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parents", elemType: shared.Reference })
  parents?: Reference[];

  @Metadata({ data: "json, name=translated_vm_count" })
  translatedVmCount?: number;

  @Metadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
