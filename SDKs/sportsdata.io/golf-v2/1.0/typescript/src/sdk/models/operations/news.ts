import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NewsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class NewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: NewsFormatEnum;
}


export class NewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NewsPathParams;
}


export class NewsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  news?: any[];

  @Metadata()
  statusCode: number;
}
