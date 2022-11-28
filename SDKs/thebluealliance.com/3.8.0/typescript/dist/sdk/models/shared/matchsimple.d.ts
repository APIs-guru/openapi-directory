import { SpeakeasyBase } from "../../../internal/utils";
import { MatchAlliance } from "./matchalliance";
/**
 * A list of alliances, the teams on the alliances, and their score.
**/
export declare class MatchSimpleAlliances extends SpeakeasyBase {
    blue?: MatchAlliance;
    red?: MatchAlliance;
}
export declare enum MatchSimpleCompLevelEnum {
    Qm = "qm",
    Ef = "ef",
    Qf = "qf",
    Sf = "sf",
    F = "f"
}
export declare enum MatchSimpleWinningAllianceEnum {
    Red = "red",
    Blue = "blue",
    Unknown = ""
}
export declare class MatchSimple extends SpeakeasyBase {
    actualTime?: number;
    alliances?: MatchSimpleAlliances;
    compLevel: MatchSimpleCompLevelEnum;
    eventKey: string;
    key: string;
    matchNumber: number;
    predictedTime?: number;
    setNumber: number;
    time?: number;
    winningAlliance?: MatchSimpleWinningAllianceEnum;
}
