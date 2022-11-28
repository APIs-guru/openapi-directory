import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HouseMembership } from "./housemembership";
import { MemberName } from "./membername";
import { MemberParty } from "./memberparty";



export class MemberHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=houseMembershipHistory", elemType: HouseMembership })
  houseMembershipHistory?: HouseMembership[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=nameHistory", elemType: MemberName })
  nameHistory?: MemberName[];

  @SpeakeasyMetadata({ data: "json, name=partyHistory", elemType: MemberParty })
  partyHistory?: MemberParty[];

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
