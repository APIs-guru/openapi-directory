import { SpeakeasyBase } from "../../../internal/utils";
import { BiographyItem } from "./biographyitem";
export declare class MemberBiography extends SpeakeasyBase {
    committeeMemberships?: BiographyItem[];
    electionsContested?: BiographyItem[];
    governmentPosts?: BiographyItem[];
    houseMemberships?: BiographyItem[];
    oppositionPosts?: BiographyItem[];
    otherPosts?: BiographyItem[];
    partyAffiliations?: BiographyItem[];
    representations?: BiographyItem[];
}
