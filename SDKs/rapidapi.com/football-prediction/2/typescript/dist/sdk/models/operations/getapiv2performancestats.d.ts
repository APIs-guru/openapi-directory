import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV2PerformanceStatsHeaders extends SpeakeasyBase {
    xRapidApiKey?: string;
}
export declare class GetApiV2PerformanceStats200ApplicationJsonDataAccuracy extends SpeakeasyBase {
    last14Days?: number;
    last30Days?: number;
    last7Days?: number;
    yesterday?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days extends SpeakeasyBase {
    lost?: number;
    pending?: number;
    postponed?: number;
    total?: number;
    won?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days extends SpeakeasyBase {
    lost?: number;
    pending?: number;
    postponed?: number;
    total?: number;
    won?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days extends SpeakeasyBase {
    lost?: number;
    pending?: number;
    postponed?: number;
    total?: number;
    won?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday extends SpeakeasyBase {
    lost?: number;
    pending?: number;
    postponed?: number;
    total?: number;
    won?: number;
}
export declare class GetApiV2PerformanceStats200ApplicationJsonDataDetails extends SpeakeasyBase {
    last14Days?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days;
    last30Days?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days;
    last7Days?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days;
    yesterday?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday;
}
export declare class GetApiV2PerformanceStats200ApplicationJsonData extends SpeakeasyBase {
    accuracy?: GetApiV2PerformanceStats200ApplicationJsonDataAccuracy;
    details?: GetApiV2PerformanceStats200ApplicationJsonDataDetails;
    market?: string;
}
export declare class GetApiV2PerformanceStats200ApplicationJson extends SpeakeasyBase {
    data?: GetApiV2PerformanceStats200ApplicationJsonData;
}
export declare class GetApiV2PerformanceStats404ApplicationJson extends SpeakeasyBase {
    errors?: Map<string, any>;
}
export declare class GetApiV2PerformanceStatsRequest extends SpeakeasyBase {
    headers: GetApiV2PerformanceStatsHeaders;
}
export declare class GetApiV2PerformanceStatsResponse extends SpeakeasyBase {
    contentType: string;
    getApiV2PerformanceStats200ApplicationJsonObject?: GetApiV2PerformanceStats200ApplicationJson;
    getApiV2PerformanceStats404ApplicationJsonObject?: GetApiV2PerformanceStats404ApplicationJson;
    statusCode: number;
}
