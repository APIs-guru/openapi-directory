import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HouseMembershipViewModel } from "./housemembershipviewmodel";
import { PartyViewModel } from "./partyviewmodel";


export class MemberViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=latestHouseMembership" })
  latestHouseMembership?: HouseMembershipViewModel;

  @Metadata({ data: "json, name=latestParty" })
  latestParty?: PartyViewModel;

  @Metadata({ data: "json, name=nameAddressAs" })
  nameAddressAs?: string;

  @Metadata({ data: "json, name=nameDisplayAs" })
  nameDisplayAs?: string;

  @Metadata({ data: "json, name=nameFullTitle" })
  nameFullTitle?: string;

  @Metadata({ data: "json, name=nameListAs" })
  nameListAs?: string;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
