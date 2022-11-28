import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerGameStatsByWeekDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class PlayerGameStatsByWeekDeltaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsByWeekDeltaFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=minutes" })
  minutes: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class PlayerGameStatsByWeekDeltaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerGameStatsByWeekDeltaPathParams;
}


export class PlayerGameStatsByWeekDeltaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGames?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
