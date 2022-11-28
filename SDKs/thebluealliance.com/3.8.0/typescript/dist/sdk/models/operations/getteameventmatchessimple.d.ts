import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventMatchesSimplePathParams extends SpeakeasyBase {
    eventKey: string;
    teamKey: string;
}
export declare class GetTeamEventMatchesSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventMatchesSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventMatchesSimpleRequest extends SpeakeasyBase {
    pathParams: GetTeamEventMatchesSimplePathParams;
    headers: GetTeamEventMatchesSimpleHeaders;
    security: GetTeamEventMatchesSimpleSecurity;
}
export declare class GetTeamEventMatchesSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    matches?: shared.Match[];
    statusCode: number;
}
