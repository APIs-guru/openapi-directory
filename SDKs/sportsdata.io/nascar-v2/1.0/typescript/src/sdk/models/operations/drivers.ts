import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DriversFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class DriversPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DriversFormatEnum;
}


export class DriversRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DriversPathParams;
}


export class DriversResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  drivers?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
