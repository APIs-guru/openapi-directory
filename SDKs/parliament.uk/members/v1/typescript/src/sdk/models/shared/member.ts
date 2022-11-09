import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HouseMembership } from "./housemembership";
import { Party } from "./party";


export class Member extends SpeakeasyBase {
  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=latestHouseMembership" })
  latestHouseMembership?: HouseMembership;

  @Metadata({ data: "json, name=latestParty" })
  latestParty?: Party;

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
