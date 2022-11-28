import { SpeakeasyBase } from "../../../internal/utils";
import { PartySeatCountItem } from "./partyseatcountitem";
import { Link } from "./link";
export declare class PartySeatCountMembersServiceSearchResult extends SpeakeasyBase {
    items?: PartySeatCountItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
