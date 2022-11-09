import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export const GETVISUALCROSSINGWEBSERVICESRESTSERVICESWEATHERDATAHISTORY_SERVERS = [
	"https://weather.visualcrossing.com",
];



export class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=aggregateHours" })
  aggregateHours?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allowAsynch" })
  allowAsynch?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=collectStationContributions" })
  collectStationContributions?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contentType" })
  contentType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDateTime" })
  endDateTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeNormals" })
  includeNormals?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locations" })
  locations?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxStations" })
  maxStations?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=shortColumnNames" })
  shortColumnNames?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDateTime" })
  startDateTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unitGroup" })
  unitGroup?: string;
}


export class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams;
}


export class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
