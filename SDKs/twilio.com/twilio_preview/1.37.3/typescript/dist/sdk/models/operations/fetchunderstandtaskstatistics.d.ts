import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchUnderstandTaskStatisticsServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandTaskStatisticsPathParams extends SpeakeasyBase {
    assistantSid: string;
    taskSid: string;
}
export declare class FetchUnderstandTaskStatisticsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUnderstandTaskStatisticsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUnderstandTaskStatisticsPathParams;
    security: FetchUnderstandTaskStatisticsSecurity;
}
export declare class FetchUnderstandTaskStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistantTaskTaskStatistics?: shared.PreviewUnderstandAssistantTaskTaskStatistics;
}
