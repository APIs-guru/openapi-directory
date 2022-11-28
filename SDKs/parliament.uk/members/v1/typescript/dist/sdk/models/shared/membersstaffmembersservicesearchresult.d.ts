import { SpeakeasyBase } from "../../../internal/utils";
import { MembersStaffItem } from "./membersstaffitem";
import { Link } from "./link";
export declare class MembersStaffMembersServiceSearchResult extends SpeakeasyBase {
    items?: MembersStaffItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
