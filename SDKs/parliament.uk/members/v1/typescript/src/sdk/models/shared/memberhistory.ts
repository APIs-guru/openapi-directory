import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HouseMembership } from "./housemembership";
import { MemberName } from "./membername";
import { MemberParty } from "./memberparty";


export class MemberHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=houseMembershipHistory", elemType: shared.HouseMembership })
  houseMembershipHistory?: HouseMembership[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=nameHistory", elemType: shared.MemberName })
  nameHistory?: MemberName[];

  @Metadata({ data: "json, name=partyHistory", elemType: shared.MemberParty })
  partyHistory?: MemberParty[];

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
