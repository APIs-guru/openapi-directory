import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupMembershipCriteria } from "./groupmembershipcriteria";



export class TierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_membership_criteria", elemType: GroupMembershipCriteria })
  groupMembershipCriteria?: GroupMembershipCriteria[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
