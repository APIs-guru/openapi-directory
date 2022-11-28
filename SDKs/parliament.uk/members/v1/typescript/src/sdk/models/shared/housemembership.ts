import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HouseMembershipStatus } from "./housemembershipstatus";



export class HouseMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=house" })
  house?: number;

  @SpeakeasyMetadata({ data: "json, name=membershipEndDate" })
  membershipEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=membershipEndReason" })
  membershipEndReason?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipEndReasonId" })
  membershipEndReasonId?: number;

  @SpeakeasyMetadata({ data: "json, name=membershipEndReasonNotes" })
  membershipEndReasonNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipFrom" })
  membershipFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipFromId" })
  membershipFromId?: number;

  @SpeakeasyMetadata({ data: "json, name=membershipStartDate" })
  membershipStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=membershipStatus" })
  membershipStatus?: HouseMembershipStatus;
}
