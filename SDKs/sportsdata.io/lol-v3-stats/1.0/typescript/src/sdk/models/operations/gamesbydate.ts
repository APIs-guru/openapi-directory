import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GamesByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class GamesByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GamesByDateFormatEnum;
}


export class GamesByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesByDatePathParams;
}


export class GamesByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  games?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
