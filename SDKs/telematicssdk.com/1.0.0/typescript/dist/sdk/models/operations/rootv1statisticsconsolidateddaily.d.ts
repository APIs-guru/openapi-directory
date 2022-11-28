import { SpeakeasyBase } from "../../../internal/utils";
export declare class RootV1StatisticsConsolidatedDailyQueryParams extends SpeakeasyBase {
    appId?: string;
    companyId?: string;
    deviceToken?: string;
    endDate?: string;
    instanceId?: string;
    startDate?: string;
    tag?: string;
}
export declare class RootV1StatisticsConsolidatedDailyRequest extends SpeakeasyBase {
    queryParams: RootV1StatisticsConsolidatedDailyQueryParams;
}
export declare class RootV1StatisticsConsolidatedDailyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
