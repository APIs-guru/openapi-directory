import { SpeakeasyBase } from "../../../internal/utils";
export declare class DistrictRankingEventPoints extends SpeakeasyBase {
    alliancePoints: number;
    awardPoints: number;
    districtCmp: boolean;
    elimPoints: number;
    eventKey: string;
    qualPoints: number;
    total: number;
}
/**
 * Rank of a team in a district.
**/
export declare class DistrictRanking extends SpeakeasyBase {
    eventPoints?: DistrictRankingEventPoints[];
    pointTotal: number;
    rank: number;
    rookieBonus?: number;
    teamKey: string;
}
