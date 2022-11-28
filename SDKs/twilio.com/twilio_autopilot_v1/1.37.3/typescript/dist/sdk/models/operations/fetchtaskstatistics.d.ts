import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTaskStatisticsServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchTaskStatisticsPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class FetchTaskStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskStatisticsPathParams;
    security: FetchTaskStatisticsSecurity;
}
export declare class FetchTaskStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantTaskTaskStatistics?: shared.AutopilotV1AssistantTaskTaskStatistics;
}
