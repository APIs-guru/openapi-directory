import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HouseMembershipViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=membershipFrom" })
  membershipFrom?: string;
}
