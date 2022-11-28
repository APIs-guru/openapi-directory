import { SpeakeasyBase } from "../../../internal/utils";
import { MemberItem } from "./memberitem";
import { Link } from "./link";
export declare class MemberMembersServiceSearchResult extends SpeakeasyBase {
    items?: MemberItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
