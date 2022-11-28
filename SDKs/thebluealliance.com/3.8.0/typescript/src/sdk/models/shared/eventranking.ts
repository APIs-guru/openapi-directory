import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WltRecord } from "./wltrecord";



export class EventRankingExtraStatsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision: number;
}


export class EventRankingRankings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dq" })
  dq: number;

  @SpeakeasyMetadata({ data: "json, name=extra_stats" })
  extraStats?: number[];

  @SpeakeasyMetadata({ data: "json, name=matches_played" })
  matchesPlayed: number;

  @SpeakeasyMetadata({ data: "json, name=qual_average" })
  qualAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank: number;

  @SpeakeasyMetadata({ data: "json, name=record" })
  record: WltRecord;

  @SpeakeasyMetadata({ data: "json, name=sort_orders" })
  sortOrders?: number[];

  @SpeakeasyMetadata({ data: "json, name=team_key" })
  teamKey: string;
}


export class EventRankingSortOrderInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision: number;
}


export class EventRanking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extra_stats_info", elemType: EventRankingExtraStatsInfo })
  extraStatsInfo?: EventRankingExtraStatsInfo[];

  @SpeakeasyMetadata({ data: "json, name=rankings", elemType: EventRankingRankings })
  rankings: EventRankingRankings[];

  @SpeakeasyMetadata({ data: "json, name=sort_order_info", elemType: EventRankingSortOrderInfo })
  sortOrderInfo: EventRankingSortOrderInfo[];
}
