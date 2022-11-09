import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GamesByDateFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class GamesByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GamesByDateFormatEnum;
}


export class GamesByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesByDatePathParams;
}


export class GamesByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  games?: any[];

  @Metadata()
  statusCode: number;
}
