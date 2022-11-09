import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const GETVISUALCROSSINGWEBSERVICESRESTSERVICESWEATHERDATAFORECAST_SERVERS = [
	"https://weather.visualcrossing.com",
];



export class GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=aggregateHours" })
  aggregateHours?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allowAsynch" })
  allowAsynch?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contentType" })
  contentType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locations" })
  locations?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sendAsDatasource" })
  sendAsDatasource?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=shortColumnNames" })
  shortColumnNames?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unitGroup" })
  unitGroup?: string;
}


export class GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams;
}


export class GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
