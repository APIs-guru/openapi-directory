import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerGameStatsByWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerGameStatsByWeekPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsByWeekFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameStatsByWeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerGameStatsByWeekPathParams;
}


export class PlayerGameStatsByWeekResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGames?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
