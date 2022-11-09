import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WltRecord } from "./wltrecord";


export class EventRankingExtraStatsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=precision" })
  precision: number;
}


export class EventRankingRankings extends SpeakeasyBase {
  @Metadata({ data: "json, name=dq" })
  dq: number;

  @Metadata({ data: "json, name=extra_stats" })
  extraStats?: number[];

  @Metadata({ data: "json, name=matches_played" })
  matchesPlayed: number;

  @Metadata({ data: "json, name=qual_average" })
  qualAverage?: number;

  @Metadata({ data: "json, name=rank" })
  rank: number;

  @Metadata({ data: "json, name=record" })
  record: WltRecord;

  @Metadata({ data: "json, name=sort_orders" })
  sortOrders?: number[];

  @Metadata({ data: "json, name=team_key" })
  teamKey: string;
}


export class EventRankingSortOrderInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=precision" })
  precision: number;
}


export class EventRanking extends SpeakeasyBase {
  @Metadata({ data: "json, name=extra_stats_info", elemType: shared.EventRankingExtraStatsInfo })
  extraStatsInfo?: EventRankingExtraStatsInfo[];

  @Metadata({ data: "json, name=rankings", elemType: shared.EventRankingRankings })
  rankings: EventRankingRankings[];

  @Metadata({ data: "json, name=sort_order_info", elemType: shared.EventRankingSortOrderInfo })
  sortOrderInfo: EventRankingSortOrderInfo[];
}
