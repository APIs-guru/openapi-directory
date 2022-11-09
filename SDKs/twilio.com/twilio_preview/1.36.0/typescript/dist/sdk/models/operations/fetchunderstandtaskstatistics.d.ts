import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUNDERSTANDTASKSTATISTICS_SERVERS: string[];
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
