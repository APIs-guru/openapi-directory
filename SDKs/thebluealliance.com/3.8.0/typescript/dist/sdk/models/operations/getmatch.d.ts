import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMatchPathParams extends SpeakeasyBase {
    matchKey: string;
}
export declare class GetMatchHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetMatchSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetMatchRequest extends SpeakeasyBase {
    pathParams: GetMatchPathParams;
    headers: GetMatchHeaders;
    security: GetMatchSecurity;
}
export declare class GetMatchResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    match?: shared.Match;
    statusCode: number;
}
