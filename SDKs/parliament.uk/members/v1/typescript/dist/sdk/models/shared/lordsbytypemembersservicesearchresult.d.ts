import { SpeakeasyBase } from "../../../internal/utils";
import { LordsByTypeItem } from "./lordsbytypeitem";
import { Link } from "./link";
export declare class LordsByTypeMembersServiceSearchResult extends SpeakeasyBase {
    items?: LordsByTypeItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
