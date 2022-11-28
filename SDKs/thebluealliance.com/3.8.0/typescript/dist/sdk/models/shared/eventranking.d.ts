import { SpeakeasyBase } from "../../../internal/utils";
import { WltRecord } from "./wltrecord";
export declare class EventRankingExtraStatsInfo extends SpeakeasyBase {
    name: string;
    precision: number;
}
export declare class EventRankingRankings extends SpeakeasyBase {
    dq: number;
    extraStats?: number[];
    matchesPlayed: number;
    qualAverage?: number;
    rank: number;
    record: WltRecord;
    sortOrders?: number[];
    teamKey: string;
}
export declare class EventRankingSortOrderInfo extends SpeakeasyBase {
    name: string;
    precision: number;
}
export declare class EventRanking extends SpeakeasyBase {
    extraStatsInfo?: EventRankingExtraStatsInfo[];
    rankings: EventRankingRankings[];
    sortOrderInfo: EventRankingSortOrderInfo[];
}
