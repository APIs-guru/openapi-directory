import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventDistrictPointsPoints extends SpeakeasyBase {
    alliancePoints: number;
    awardPoints: number;
    elimPoints: number;
    qualPoints: number;
    total: number;
}
export declare class EventDistrictPointsTiebreakers extends SpeakeasyBase {
    highestQualScores?: number[];
    qualWins?: number;
}
export declare class EventDistrictPoints extends SpeakeasyBase {
    points: Map<string, EventDistrictPointsPoints>;
    tiebreakers?: Map<string, EventDistrictPointsTiebreakers>;
}
