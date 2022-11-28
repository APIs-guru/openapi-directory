import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventsSimplePathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamEventsSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventsSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventsSimpleRequest extends SpeakeasyBase {
    pathParams: GetTeamEventsSimplePathParams;
    headers: GetTeamEventsSimpleHeaders;
    security: GetTeamEventsSimpleSecurity;
}
export declare class GetTeamEventsSimpleResponse extends SpeakeasyBase {
    contentType: string;
    eventSimples?: shared.EventSimple[];
    headers: Map<string, string[]>;
    statusCode: number;
}
