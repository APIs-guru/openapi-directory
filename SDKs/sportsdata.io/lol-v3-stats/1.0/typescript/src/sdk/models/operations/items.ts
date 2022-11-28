import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ItemsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class ItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ItemsFormatEnum;
}


export class ItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ItemsPathParams;
}


export class ItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  items?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
