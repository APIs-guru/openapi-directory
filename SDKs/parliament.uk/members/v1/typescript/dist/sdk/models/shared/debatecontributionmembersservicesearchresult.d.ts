import { SpeakeasyBase } from "../../../internal/utils";
import { DebateContributionItem } from "./debatecontributionitem";
import { Link } from "./link";
export declare class DebateContributionMembersServiceSearchResult extends SpeakeasyBase {
    items?: DebateContributionItem[];
    links?: Link[];
    resultContext?: string;
    skip?: number;
    take?: number;
    totalResults?: number;
}
