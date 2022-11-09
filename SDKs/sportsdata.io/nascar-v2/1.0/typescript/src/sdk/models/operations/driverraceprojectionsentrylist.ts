import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DriverRaceProjectionsEntryListFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class DriverRaceProjectionsEntryListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DriverRaceProjectionsEntryListFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=raceid" })
  raceid: string;
}


export class DriverRaceProjectionsEntryListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DriverRaceProjectionsEntryListPathParams;
}


export class DriverRaceProjectionsEntryListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  driverRaceProjections?: any[];

  @Metadata()
  statusCode: number;
}
