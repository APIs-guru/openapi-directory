import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonAwayStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonAwayStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonAwayStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonAwayStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonAwayStatsPathParams;
}


export class PlayerSeasonAwayStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
