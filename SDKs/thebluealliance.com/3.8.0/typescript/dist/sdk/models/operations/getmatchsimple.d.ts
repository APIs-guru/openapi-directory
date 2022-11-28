import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMatchSimplePathParams extends SpeakeasyBase {
    matchKey: string;
}
export declare class GetMatchSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetMatchSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetMatchSimpleRequest extends SpeakeasyBase {
    pathParams: GetMatchSimplePathParams;
    headers: GetMatchSimpleHeaders;
    security: GetMatchSimpleSecurity;
}
export declare class GetMatchSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    matchSimple?: shared.MatchSimple;
    statusCode: number;
}
