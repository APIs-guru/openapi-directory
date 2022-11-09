import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GamesByWeekFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class GamesByWeekPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GamesByWeekFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class GamesByWeekRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesByWeekPathParams;
}


export class GamesByWeekResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  games?: any[];

  @Metadata()
  statusCode: number;
}
