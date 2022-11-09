import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum XPingFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class XPingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: XPingFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=seconds" })
  seconds: string;
}


export class XPingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: XPingPathParams;
}


export class XPingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  xPing200ApplicationJsonAny?: any;
}
