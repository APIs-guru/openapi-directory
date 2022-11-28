import { SpeakeasyBase } from "../../../internal/utils";
import { MatchAlliance } from "./matchalliance";
/**
 * A list of alliances, the teams on the alliances, and their score.
**/
export declare class MatchAlliances extends SpeakeasyBase {
    blue?: MatchAlliance;
    red?: MatchAlliance;
}
export declare enum MatchCompLevelEnum {
    Qm = "qm",
    Ef = "ef",
    Qf = "qf",
    Sf = "sf",
    F = "f"
}
export declare class MatchVideos extends SpeakeasyBase {
    key?: string;
    type?: string;
}
export declare enum MatchWinningAllianceEnum {
    Red = "red",
    Blue = "blue",
    Unknown = ""
}
export declare class Match extends SpeakeasyBase {
    actualTime?: number;
    alliances?: MatchAlliances;
    compLevel: MatchCompLevelEnum;
    eventKey: string;
    key: string;
    matchNumber: number;
    postResultTime?: number;
    predictedTime?: number;
    scoreBreakdown?: Map<string, any>;
    setNumber: number;
    time?: number;
    videos?: MatchVideos[];
    winningAlliance?: MatchWinningAllianceEnum;
}
