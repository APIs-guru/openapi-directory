import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { GroupMembershipCriteria } from "./groupmembershipcriteria";



export class Tier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application?: Reference;

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=group_membership_criteria", elemType: GroupMembershipCriteria })
  groupMembershipCriteria?: GroupMembershipCriteria[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
