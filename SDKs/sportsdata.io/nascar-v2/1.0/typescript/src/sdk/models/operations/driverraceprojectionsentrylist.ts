import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DriverRaceProjectionsEntryListFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class DriverRaceProjectionsEntryListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DriverRaceProjectionsEntryListFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=raceid" })
  raceid: string;
}


export class DriverRaceProjectionsEntryListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DriverRaceProjectionsEntryListPathParams;
}


export class DriverRaceProjectionsEntryListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  driverRaceProjections?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
