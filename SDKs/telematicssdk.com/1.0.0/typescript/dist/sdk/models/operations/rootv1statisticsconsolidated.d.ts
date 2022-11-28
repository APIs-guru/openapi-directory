import { SpeakeasyBase } from "../../../internal/utils";
export declare class RootV1StatisticsConsolidatedQueryParams extends SpeakeasyBase {
    appId?: string;
    companyId?: string;
    deviceToken?: string;
    endDate?: string;
    instanceId?: string;
    startDate?: string;
    tag?: string;
}
export declare class RootV1StatisticsConsolidatedRequest extends SpeakeasyBase {
    queryParams: RootV1StatisticsConsolidatedQueryParams;
}
export declare class RootV1StatisticsConsolidatedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
