import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HouseMembershipViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=membershipFrom" })
  membershipFrom?: string;
}
