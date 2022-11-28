import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HouseMembershipViewModel } from "./housemembershipviewmodel";
import { PartyViewModel } from "./partyviewmodel";



export class MemberViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=latestHouseMembership" })
  latestHouseMembership?: HouseMembershipViewModel;

  @SpeakeasyMetadata({ data: "json, name=latestParty" })
  latestParty?: PartyViewModel;

  @SpeakeasyMetadata({ data: "json, name=nameAddressAs" })
  nameAddressAs?: string;

  @SpeakeasyMetadata({ data: "json, name=nameDisplayAs" })
  nameDisplayAs?: string;

  @SpeakeasyMetadata({ data: "json, name=nameFullTitle" })
  nameFullTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=nameListAs" })
  nameListAs?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;
}
