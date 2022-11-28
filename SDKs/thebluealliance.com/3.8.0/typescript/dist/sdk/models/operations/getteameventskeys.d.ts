import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventsKeysPathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamEventsKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventsKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventsKeysRequest extends SpeakeasyBase {
    pathParams: GetTeamEventsKeysPathParams;
    headers: GetTeamEventsKeysHeaders;
    security: GetTeamEventsKeysSecurity;
}
export declare class GetTeamEventsKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getTeamEventsKeys200ApplicationJsonStrings?: string[];
}
