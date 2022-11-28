import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AnalyticsGroupByEnum {
    Date = "date",
    Label = "label",
    Subaccount = "subaccount",
    Country = "country"
}
export declare class AnalyticsQueryParams extends SpeakeasyBase {
    end?: string;
    groupBy?: AnalyticsGroupByEnum;
    label?: string;
    start?: string;
    subaccounts?: string;
}
export declare class Analytics200ApplicationJson extends SpeakeasyBase {
    date?: string;
    direct?: number;
    economy?: number;
    hlr?: number;
    inbound?: number;
    mnp?: number;
    usageEur?: number;
    voice?: number;
}
export declare class AnalyticsRequest extends SpeakeasyBase {
    queryParams: AnalyticsQueryParams;
}
export declare class AnalyticsResponse extends SpeakeasyBase {
    analytics200ApplicationJsonObject?: Analytics200ApplicationJson;
    contentType: string;
    statusCode: number;
}
