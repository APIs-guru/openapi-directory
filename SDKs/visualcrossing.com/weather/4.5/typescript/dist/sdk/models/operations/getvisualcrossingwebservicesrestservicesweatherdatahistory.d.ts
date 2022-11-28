import { SpeakeasyBase } from "../../../internal/utils";
export declare const GetVisualCrossingWebServicesRestServicesWeatherdataHistoryServerList: readonly ["https://weather.visualcrossing.com"];
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams extends SpeakeasyBase {
    aggregateHours?: string;
    allowAsynch?: boolean;
    collectStationContributions?: boolean;
    contentType?: string;
    endDateTime?: string;
    includeNormals?: boolean;
    key?: string;
    locations?: string;
    maxDistance?: string;
    maxStations?: string;
    shortColumnNames?: boolean;
    startDateTime?: string;
    unitGroup?: string;
}
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: GetVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryParams;
}
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
