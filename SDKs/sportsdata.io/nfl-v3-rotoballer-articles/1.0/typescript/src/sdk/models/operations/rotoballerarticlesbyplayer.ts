import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RotoballerArticlesByPlayerFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class RotoballerArticlesByPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RotoballerArticlesByPlayerFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class RotoballerArticlesByPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RotoballerArticlesByPlayerPathParams;
}


export class RotoballerArticlesByPlayerResponse extends SpeakeasyBase {
  @Metadata()
  articles?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
