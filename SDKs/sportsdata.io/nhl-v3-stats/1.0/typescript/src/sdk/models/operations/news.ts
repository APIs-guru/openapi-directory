import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NewsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class NewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: NewsFormatEnum;
}


export class NewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NewsPathParams;
}


export class NewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  news?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
