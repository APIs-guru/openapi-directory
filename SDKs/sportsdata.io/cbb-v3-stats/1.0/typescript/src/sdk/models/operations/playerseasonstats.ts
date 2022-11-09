import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonStatsPathParams;
}


export class PlayerSeasonStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasons?: any[];

  @Metadata()
  statusCode: number;
}
