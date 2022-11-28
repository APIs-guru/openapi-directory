import { SpeakeasyBase } from "../../../internal/utils";
export declare class RootV1ScoringsConsolidatedDailyQueryParams extends SpeakeasyBase {
    appId?: string;
    companyId?: string;
    deviceToken?: string;
    endDate?: string;
    instanceId?: string;
    startDate?: string;
    tag?: string;
}
export declare class RootV1ScoringsConsolidatedDaily200ApplicationJsonResult extends SpeakeasyBase {
    accelerationScore?: number;
    appId?: string;
    brakingScore?: number;
    companyId?: string;
    corneringScore?: number;
    deviceToken?: string;
    distractedScore?: number;
    instanceId?: string;
    overallScore?: number;
    reportDate?: string;
    speedingScore?: number;
}
export declare class RootV1ScoringsConsolidatedDaily200ApplicationJson extends SpeakeasyBase {
    errors?: any[];
    result?: RootV1ScoringsConsolidatedDaily200ApplicationJsonResult[];
    status?: number;
    title?: string;
}
export declare class RootV1ScoringsConsolidatedDailyRequest extends SpeakeasyBase {
    queryParams: RootV1ScoringsConsolidatedDailyQueryParams;
}
export declare class RootV1ScoringsConsolidatedDailyResponse extends SpeakeasyBase {
    rootV1ScoringsConsolidatedDaily200ApplicationJsonObject?: RootV1ScoringsConsolidatedDaily200ApplicationJson;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
