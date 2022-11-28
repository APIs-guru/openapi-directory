import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WltRecord } from "./wltrecord";



export class TeamEventStatusRankRanking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dq" })
  dq?: number;

  @SpeakeasyMetadata({ data: "json, name=matches_played" })
  matchesPlayed?: number;

  @SpeakeasyMetadata({ data: "json, name=qual_average" })
  qualAverage?: number;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: number;

  @SpeakeasyMetadata({ data: "json, name=record" })
  record?: WltRecord;

  @SpeakeasyMetadata({ data: "json, name=sort_orders" })
  sortOrders?: number[];

  @SpeakeasyMetadata({ data: "json, name=team_key" })
  teamKey?: string;
}


export class TeamEventStatusRankSortOrderInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;
}


export class TeamEventStatusRank extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=num_teams" })
  numTeams?: number;

  @SpeakeasyMetadata({ data: "json, name=ranking" })
  ranking?: TeamEventStatusRankRanking;

  @SpeakeasyMetadata({ data: "json, name=sort_order_info", elemType: TeamEventStatusRankSortOrderInfo })
  sortOrderInfo?: TeamEventStatusRankSortOrderInfo[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
