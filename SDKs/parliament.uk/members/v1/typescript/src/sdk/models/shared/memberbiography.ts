import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BiographyItem } from "./biographyitem";
import { BiographyItem } from "./biographyitem";
import { BiographyItem } from "./biographyitem";
import { BiographyItem } from "./biographyitem";
import { BiographyItem } from "./biographyitem";
import { BiographyItem } from "./biographyitem";
import { BiographyItem } from "./biographyitem";
import { BiographyItem } from "./biographyitem";


export class MemberBiography extends SpeakeasyBase {
  @Metadata({ data: "json, name=committeeMemberships", elemType: shared.BiographyItem })
  committeeMemberships?: BiographyItem[];

  @Metadata({ data: "json, name=electionsContested", elemType: shared.BiographyItem })
  electionsContested?: BiographyItem[];

  @Metadata({ data: "json, name=governmentPosts", elemType: shared.BiographyItem })
  governmentPosts?: BiographyItem[];

  @Metadata({ data: "json, name=houseMemberships", elemType: shared.BiographyItem })
  houseMemberships?: BiographyItem[];

  @Metadata({ data: "json, name=oppositionPosts", elemType: shared.BiographyItem })
  oppositionPosts?: BiographyItem[];

  @Metadata({ data: "json, name=otherPosts", elemType: shared.BiographyItem })
  otherPosts?: BiographyItem[];

  @Metadata({ data: "json, name=partyAffiliations", elemType: shared.BiographyItem })
  partyAffiliations?: BiographyItem[];

  @Metadata({ data: "json, name=representations", elemType: shared.BiographyItem })
  representations?: BiographyItem[];
}
