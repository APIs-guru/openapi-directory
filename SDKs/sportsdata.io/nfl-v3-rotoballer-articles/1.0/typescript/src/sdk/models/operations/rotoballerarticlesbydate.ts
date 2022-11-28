import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RotoballerArticlesByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class RotoballerArticlesByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RotoballerArticlesByDateFormatEnum;
}


export class RotoballerArticlesByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RotoballerArticlesByDatePathParams;
}


export class RotoballerArticlesByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articles?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
