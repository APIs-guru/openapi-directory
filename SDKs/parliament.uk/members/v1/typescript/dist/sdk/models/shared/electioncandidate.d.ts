import { SpeakeasyBase } from "../../../internal/utils";
import { Party } from "./party";
export declare class ElectionCandidate extends SpeakeasyBase {
    memberId?: number;
    name?: string;
    party?: Party;
    rankOrder?: number;
    resultChange?: string;
    voteShare?: number;
    votes?: number;
}
