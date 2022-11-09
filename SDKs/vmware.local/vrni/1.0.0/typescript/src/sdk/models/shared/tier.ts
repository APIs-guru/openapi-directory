import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { GroupMembershipCriteria } from "./groupmembershipcriteria";


export class Tier extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application?: Reference;

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=group_membership_criteria", elemType: shared.GroupMembershipCriteria })
  groupMembershipCriteria?: GroupMembershipCriteria[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
