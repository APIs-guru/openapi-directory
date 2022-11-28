import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DriverDetailsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class DriverDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=driverid" })
  driverid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DriverDetailsFormatEnum;
}


export class DriverDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DriverDetailsPathParams;
}


export class DriverDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  driver?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
