import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const GetVisualCrossingWebServicesRestServicesWeatherdataHistoryServerList = [
	"https://weather.visualcrossing.com",
] as const;


export class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aggregateHours" })
  aggregateHours?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAsynch" })
  allowAsynch?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=collectStationContributions" })
  collectStationContributions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDateTime" })
  endDateTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeNormals" })
  includeNormals?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locations" })
  locations?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStations" })
  maxStations?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shortColumnNames" })
  shortColumnNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDateTime" })
  startDateTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitGroup" })
  unitGroup?: string;
}


export class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams;
}


export class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
