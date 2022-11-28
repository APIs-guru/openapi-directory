import { SpeakeasyBase } from "../../../internal/utils";
import { VoteItem } from "./voteitem";
import { Link } from "./link";
export declare class VoteMembersServiceSearchResult extends SpeakeasyBase {
    items?: VoteItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
