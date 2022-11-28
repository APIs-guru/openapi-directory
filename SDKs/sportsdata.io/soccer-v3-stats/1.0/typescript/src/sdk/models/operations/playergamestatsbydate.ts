import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlayerGameStatsByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class PlayerGameStatsByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PlayerGameStatsByDateFormatEnum;
}


export class PlayerGameStatsByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayerGameStatsByDatePathParams;
}


export class PlayerGameStatsByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playerGames?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
