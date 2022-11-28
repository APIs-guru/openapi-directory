import { SpeakeasyBase } from "../../../internal/utils";
export declare class RootV1ScoringsConsolidatedQueryParams extends SpeakeasyBase {
    appId?: string;
    companyId?: string;
    deviceToken?: string;
    endDate?: string;
    instanceId?: string;
    startDate?: string;
    tag?: string;
}
export declare class RootV1ScoringsConsolidatedRequest extends SpeakeasyBase {
    queryParams: RootV1ScoringsConsolidatedQueryParams;
}
export declare class RootV1ScoringsConsolidatedResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
