import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StoryIdAnalyticsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StoryIdAnalyticsRequest extends SpeakeasyBase {
    pathParams: StoryIdAnalyticsPathParams;
}
export declare class StoryIdAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    loginButton?: string;
    statusCode: number;
    problemDetail?: any;
    revealJsPresenationWithAnalyticsData?: string;
}
