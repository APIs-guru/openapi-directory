import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RotoballerArticlesFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class RotoballerArticlesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RotoballerArticlesFormatEnum;
}


export class RotoballerArticlesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RotoballerArticlesPathParams;
}


export class RotoballerArticlesResponse extends SpeakeasyBase {
  @Metadata()
  articles?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
