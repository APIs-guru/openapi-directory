import { SpeakeasyBase } from "../../../internal/utils";
import { MembersInterestsItem } from "./membersinterestsitem";
import { Link } from "./link";
export declare class MembersInterestsMembersServiceSearchResult extends SpeakeasyBase {
    items?: MembersInterestsItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
