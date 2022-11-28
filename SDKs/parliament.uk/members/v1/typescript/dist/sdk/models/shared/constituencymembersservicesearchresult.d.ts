import { SpeakeasyBase } from "../../../internal/utils";
import { ConstituencyItem } from "./constituencyitem";
import { Link } from "./link";
export declare class ConstituencyMembersServiceSearchResult extends SpeakeasyBase {
    items?: ConstituencyItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
