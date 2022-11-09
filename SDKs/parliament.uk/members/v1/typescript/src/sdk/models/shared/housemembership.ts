import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HouseMembershipStatus } from "./housemembershipstatus";


export class HouseMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=house" })
  house?: number;

  @Metadata({ data: "json, name=membershipEndDate" })
  membershipEndDate?: Date;

  @Metadata({ data: "json, name=membershipEndReason" })
  membershipEndReason?: string;

  @Metadata({ data: "json, name=membershipEndReasonId" })
  membershipEndReasonId?: number;

  @Metadata({ data: "json, name=membershipEndReasonNotes" })
  membershipEndReasonNotes?: string;

  @Metadata({ data: "json, name=membershipFrom" })
  membershipFrom?: string;

  @Metadata({ data: "json, name=membershipFromId" })
  membershipFromId?: number;

  @Metadata({ data: "json, name=membershipStartDate" })
  membershipStartDate?: Date;

  @Metadata({ data: "json, name=membershipStatus" })
  membershipStatus?: HouseMembershipStatus;
}
