import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams extends SpeakeasyBase {
    endDate?: string;
    startDate?: string;
    tag?: string;
}
export declare class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult extends SpeakeasyBase {
    accelerationScore?: number;
    appId?: string;
    brakingScore?: number;
    calcDate?: string;
    companyId?: string;
    corneringScore?: number;
    deviceToken?: string;
    distractedScore?: number;
    instanceId?: string;
    overallScore?: number;
    speedingScore?: number;
}
export declare class UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson extends SpeakeasyBase {
    errors?: any[];
    result?: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonResult[];
    status?: number;
    title?: string;
}
export declare class UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest extends SpeakeasyBase {
    queryParams: UserSafeScoringDailyValueV1ScoringsIndividualDailyQueryParams;
}
export declare class UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    userSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJsonObject?: UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJson;
}
