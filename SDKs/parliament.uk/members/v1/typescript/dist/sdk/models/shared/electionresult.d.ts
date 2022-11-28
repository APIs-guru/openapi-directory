import { SpeakeasyBase } from "../../../internal/utils";
import { ElectionCandidate } from "./electioncandidate";
import { Party } from "./party";
export declare class ElectionResult extends SpeakeasyBase {
    candidates?: ElectionCandidate[];
    constituencyName?: string;
    electionDate?: Date;
    electionId?: number;
    electionTitle?: string;
    electorate?: number;
    isGeneralElection?: boolean;
    isNotional?: boolean;
    majority?: number;
    result?: string;
    turnout?: number;
    winningParty?: Party;
}
