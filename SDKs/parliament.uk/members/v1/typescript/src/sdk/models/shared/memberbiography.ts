import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BiographyItem } from "./biographyitem";



export class MemberBiography extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=committeeMemberships", elemType: BiographyItem })
  committeeMemberships?: BiographyItem[];

  @SpeakeasyMetadata({ data: "json, name=electionsContested", elemType: BiographyItem })
  electionsContested?: BiographyItem[];

  @SpeakeasyMetadata({ data: "json, name=governmentPosts", elemType: BiographyItem })
  governmentPosts?: BiographyItem[];

  @SpeakeasyMetadata({ data: "json, name=houseMemberships", elemType: BiographyItem })
  houseMemberships?: BiographyItem[];

  @SpeakeasyMetadata({ data: "json, name=oppositionPosts", elemType: BiographyItem })
  oppositionPosts?: BiographyItem[];

  @SpeakeasyMetadata({ data: "json, name=otherPosts", elemType: BiographyItem })
  otherPosts?: BiographyItem[];

  @SpeakeasyMetadata({ data: "json, name=partyAffiliations", elemType: BiographyItem })
  partyAffiliations?: BiographyItem[];

  @SpeakeasyMetadata({ data: "json, name=representations", elemType: BiographyItem })
  representations?: BiographyItem[];
}
