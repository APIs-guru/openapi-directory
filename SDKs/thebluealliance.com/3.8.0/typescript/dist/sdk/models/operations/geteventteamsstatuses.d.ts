import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventTeamsStatusesPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventTeamsStatusesHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventTeamsStatusesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventTeamsStatusesRequest extends SpeakeasyBase {
    pathParams: GetEventTeamsStatusesPathParams;
    headers: GetEventTeamsStatusesHeaders;
    security: GetEventTeamsStatusesSecurity;
}
export declare class GetEventTeamsStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getEventTeamsStatuses200ApplicationJsonObject?: Map<string, shared.TeamEventStatus>;
}
