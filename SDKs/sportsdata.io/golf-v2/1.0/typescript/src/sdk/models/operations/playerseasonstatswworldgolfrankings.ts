import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonStatsWWorldGolfRankingsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonStatsWWorldGolfRankingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonStatsWWorldGolfRankingsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonStatsWWorldGolfRankingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonStatsWWorldGolfRankingsPathParams;
}


export class PlayerSeasonStatsWWorldGolfRankingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
