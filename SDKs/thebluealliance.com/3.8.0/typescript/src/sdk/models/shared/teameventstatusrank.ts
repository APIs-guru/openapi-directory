import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WltRecord } from "./wltrecord";


export class TeamEventStatusRankRanking extends SpeakeasyBase {
  @Metadata({ data: "json, name=dq" })
  dq?: number;

  @Metadata({ data: "json, name=matches_played" })
  matchesPlayed?: number;

  @Metadata({ data: "json, name=qual_average" })
  qualAverage?: number;

  @Metadata({ data: "json, name=rank" })
  rank?: number;

  @Metadata({ data: "json, name=record" })
  record?: WltRecord;

  @Metadata({ data: "json, name=sort_orders" })
  sortOrders?: number[];

  @Metadata({ data: "json, name=team_key" })
  teamKey?: string;
}


export class TeamEventStatusRankSortOrderInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=precision" })
  precision?: number;
}


export class TeamEventStatusRank extends SpeakeasyBase {
  @Metadata({ data: "json, name=num_teams" })
  numTeams?: number;

  @Metadata({ data: "json, name=ranking" })
  ranking?: TeamEventStatusRankRanking;

  @Metadata({ data: "json, name=sort_order_info", elemType: shared.TeamEventStatusRankSortOrderInfo })
  sortOrderInfo?: TeamEventStatusRankSortOrderInfo[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}
