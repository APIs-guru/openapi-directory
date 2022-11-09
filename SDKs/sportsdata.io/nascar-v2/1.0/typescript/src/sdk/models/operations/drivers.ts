import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DriversFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class DriversPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DriversFormatEnum;
}


export class DriversRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DriversPathParams;
}


export class DriversResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  drivers?: any[];

  @Metadata()
  statusCode: number;
}
