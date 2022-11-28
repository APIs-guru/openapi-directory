import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RotoballerArticlesByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class RotoballerArticlesByPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RotoballerArticlesByPlayerFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class RotoballerArticlesByPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RotoballerArticlesByPlayerPathParams;
}


export class RotoballerArticlesByPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articles?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
