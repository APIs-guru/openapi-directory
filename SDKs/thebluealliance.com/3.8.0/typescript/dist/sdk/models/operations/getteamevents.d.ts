import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventsPathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamEventsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventsRequest extends SpeakeasyBase {
    pathParams: GetTeamEventsPathParams;
    headers: GetTeamEventsHeaders;
    security: GetTeamEventsSecurity;
}
export declare class GetTeamEventsResponse extends SpeakeasyBase {
    contentType: string;
    events?: shared.Event[];
    headers: Map<string, string[]>;
    statusCode: number;
}
