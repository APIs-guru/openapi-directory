import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RotoballerArticlesByDateFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class RotoballerArticlesByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RotoballerArticlesByDateFormatEnum;
}


export class RotoballerArticlesByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RotoballerArticlesByDatePathParams;
}


export class RotoballerArticlesByDateResponse extends SpeakeasyBase {
  @Metadata()
  articles?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
