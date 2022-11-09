import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DriverDetailsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class DriverDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=driverid" })
  driverid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DriverDetailsFormatEnum;
}


export class DriverDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DriverDetailsPathParams;
}


export class DriverDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  driver?: any;

  @Metadata()
  statusCode: number;
}
