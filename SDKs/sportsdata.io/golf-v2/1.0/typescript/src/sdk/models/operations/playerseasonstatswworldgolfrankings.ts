import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerSeasonStatsWWorldGolfRankingsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerSeasonStatsWWorldGolfRankingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonStatsWWorldGolfRankingsFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonStatsWWorldGolfRankingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerSeasonStatsWWorldGolfRankingsPathParams;
}


export class PlayerSeasonStatsWWorldGolfRankingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerSeasons?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
