import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";

export const GetVisualCrossingWebServicesRestServicesWeatherdataForecastServerList = [
	"https://weather.visualcrossing.com",
] as const;


export class GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aggregateHours" })
  aggregateHours?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAsynch" })
  allowAsynch?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locations" })
  locations?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendAsDatasource" })
  sendAsDatasource?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shortColumnNames" })
  shortColumnNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitGroup" })
  unitGroup?: string;
}


export class GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams;
}


export class GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
