import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ItemsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class ItemsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ItemsFormatEnum;
}


export class ItemsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ItemsPathParams;
}


export class ItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  items?: any[];

  @Metadata()
  statusCode: number;
}
