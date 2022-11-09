import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerSeasonThirdDownStatsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerSeasonThirdDownStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerSeasonThirdDownStatsFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class PlayerSeasonThirdDownStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerSeasonThirdDownStatsPathParams;
}


export class PlayerSeasonThirdDownStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerSeasonThirdDowns?: any[];

  @Metadata()
  statusCode: number;
}
