import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VenuesFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class VenuesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: VenuesFormatEnum;
}


export class VenuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VenuesPathParams;
}


export class VenuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  venues?: any[];
}
