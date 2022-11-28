import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RotoballerArticlesFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class RotoballerArticlesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RotoballerArticlesFormatEnum;
}


export class RotoballerArticlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RotoballerArticlesPathParams;
}


export class RotoballerArticlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articles?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
