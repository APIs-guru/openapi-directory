import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceEnergyUsagePathParams extends SpeakeasyBase {
    deviceId: number;
}
export declare enum GetDeviceEnergyUsageBasisEnum {
    Monthly = "MONTHLY",
    Daily = "DAILY",
    Hourly = "HOURLY"
}
export declare enum GetDeviceEnergyUsageRollPeriodEnum {
    OneDay = "ONE_DAY",
    OneWeek = "ONE_WEEK",
    OneMonth = "ONE_MONTH",
    SixMonths = "SIX_MONTHS",
    OneYear = "ONE_YEAR"
}
export declare class GetDeviceEnergyUsageQueryParams extends SpeakeasyBase {
    basis?: GetDeviceEnergyUsageBasisEnum;
    rollPeriod?: GetDeviceEnergyUsageRollPeriodEnum;
}
export declare class GetDeviceEnergyUsageRequest extends SpeakeasyBase {
    pathParams: GetDeviceEnergyUsagePathParams;
    queryParams: GetDeviceEnergyUsageQueryParams;
}
export declare class GetDeviceEnergyUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
