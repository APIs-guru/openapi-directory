import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventInsightsPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventInsightsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventInsightsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventInsightsRequest extends SpeakeasyBase {
    pathParams: GetEventInsightsPathParams;
    headers: GetEventInsightsHeaders;
    security: GetEventInsightsSecurity;
}
export declare class GetEventInsightsResponse extends SpeakeasyBase {
    contentType: string;
    eventInsights?: shared.EventInsights;
    headers: Map<string, string[]>;
    statusCode: number;
}
