import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameStatsByWeekDeltaFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerGameStatsByWeekDeltaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsByWeekDeltaFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameStatsByWeekDeltaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameStatsByWeekDeltaPathParams;
}


export class PlayerGameStatsByWeekDeltaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGames?: any[];

  @Metadata()
  statusCode: number;
}
