import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventMatchesPathParams extends SpeakeasyBase {
    eventKey: string;
    teamKey: string;
}
export declare class GetTeamEventMatchesHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventMatchesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventMatchesRequest extends SpeakeasyBase {
    pathParams: GetTeamEventMatchesPathParams;
    headers: GetTeamEventMatchesHeaders;
    security: GetTeamEventMatchesSecurity;
}
export declare class GetTeamEventMatchesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    matches?: shared.Match[];
    statusCode: number;
}
