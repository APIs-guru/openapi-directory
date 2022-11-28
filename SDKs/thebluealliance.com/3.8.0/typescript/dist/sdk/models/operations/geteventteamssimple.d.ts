import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventTeamsSimplePathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventTeamsSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventTeamsSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventTeamsSimpleRequest extends SpeakeasyBase {
    pathParams: GetEventTeamsSimplePathParams;
    headers: GetEventTeamsSimpleHeaders;
    security: GetEventTeamsSimpleSecurity;
}
export declare class GetEventTeamsSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamSimples?: shared.TeamSimple[];
}
