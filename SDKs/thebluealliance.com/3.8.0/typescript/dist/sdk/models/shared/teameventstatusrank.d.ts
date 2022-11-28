import { SpeakeasyBase } from "../../../internal/utils";
import { WltRecord } from "./wltrecord";
export declare class TeamEventStatusRankRanking extends SpeakeasyBase {
    dq?: number;
    matchesPlayed?: number;
    qualAverage?: number;
    rank?: number;
    record?: WltRecord;
    sortOrders?: number[];
    teamKey?: string;
}
export declare class TeamEventStatusRankSortOrderInfo extends SpeakeasyBase {
    name?: string;
    precision?: number;
}
export declare class TeamEventStatusRank extends SpeakeasyBase {
    numTeams?: number;
    ranking?: TeamEventStatusRankRanking;
    sortOrderInfo?: TeamEventStatusRankSortOrderInfo[];
    status?: string;
}
