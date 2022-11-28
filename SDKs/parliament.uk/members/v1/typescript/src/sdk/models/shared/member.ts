import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HouseMembership } from "./housemembership";
import { Party } from "./party";



export class Member extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=latestHouseMembership" })
  latestHouseMembership?: HouseMembership;

  @SpeakeasyMetadata({ data: "json, name=latestParty" })
  latestParty?: Party;

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
