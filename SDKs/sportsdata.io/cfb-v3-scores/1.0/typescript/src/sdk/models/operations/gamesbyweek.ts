import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GamesByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class GamesByWeekPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GamesByWeekFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class GamesByWeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesByWeekPathParams;
}


export class GamesByWeekResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  games?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
