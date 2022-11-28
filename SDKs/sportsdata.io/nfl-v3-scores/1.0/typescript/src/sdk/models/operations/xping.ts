import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum XPingFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class XPingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: XPingFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=seconds" })
  seconds: string;
}


export class XPingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: XPingPathParams;
}


export class XPingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  xPing200ApplicationJsonAny?: any;
}
