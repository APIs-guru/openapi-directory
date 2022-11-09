import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupMembershipCriteria } from "./groupmembershipcriteria";


export class TierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=group_membership_criteria", elemType: shared.GroupMembershipCriteria })
  groupMembershipCriteria?: GroupMembershipCriteria[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
