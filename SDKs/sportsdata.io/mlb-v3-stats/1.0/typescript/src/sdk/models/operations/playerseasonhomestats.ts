import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonHomeStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonHomeStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonHomeStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonHomeStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonHomeStatsPathParams;
}


export class PlayerSeasonHomeStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
