import { SpeakeasyBase } from "../../../internal/utils";
import { PartyItem } from "./partyitem";
import { Link } from "./link";
export declare class PartyMembersServiceSearchResult extends SpeakeasyBase {
    items?: PartyItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
