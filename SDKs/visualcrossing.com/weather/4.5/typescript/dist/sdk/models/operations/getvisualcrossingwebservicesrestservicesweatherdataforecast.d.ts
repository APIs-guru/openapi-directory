import { SpeakeasyBase } from "../../../internal/utils";
export declare const GetVisualCrossingWebServicesRestServicesWeatherdataForecastServerList: readonly ["https://weather.visualcrossing.com"];
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams extends SpeakeasyBase {
    aggregateHours?: string;
    allowAsynch?: boolean;
    contentType?: string;
    key?: string;
    locations?: string;
    sendAsDatasource?: boolean;
    shortColumnNames?: boolean;
    unitGroup?: string;
}
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: GetVisualCrossingWebServicesRestServicesWeatherdataForecastQueryParams;
}
export declare class GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
