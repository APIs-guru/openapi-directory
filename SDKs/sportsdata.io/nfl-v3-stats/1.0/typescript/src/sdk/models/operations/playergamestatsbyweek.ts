import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlayerGameStatsByWeekFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class PlayerGameStatsByWeekPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsByWeekFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameStatsByWeekRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayerGameStatsByWeekPathParams;
}


export class PlayerGameStatsByWeekResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playerGames?: any[];

  @Metadata()
  statusCode: number;
}
