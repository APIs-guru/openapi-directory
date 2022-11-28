import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams extends SpeakeasyBase {
    endDate?: string;
    startDate?: string;
}
export declare class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult extends SpeakeasyBase {
    accelerationScore?: number;
    appId?: string;
    brakingScore?: number;
    companyId?: string;
    corneringScore?: number;
    deviceToken?: string;
    distractedScore?: number;
    instanceId?: string;
    overallScore?: number;
    speedingScore?: number;
}
export declare class UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson extends SpeakeasyBase {
    errors?: any[];
    result?: UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonResult;
    status?: number;
    title?: string;
}
export declare class UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest extends SpeakeasyBase {
    queryParams: UserSafeScoringAccumulatedValueV1ScoringsIndividualQueryParams;
}
export declare class UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonObject?: UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson;
}
