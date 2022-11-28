import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventMatchesSimplePathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventMatchesSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventMatchesSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventMatchesSimpleRequest extends SpeakeasyBase {
    pathParams: GetEventMatchesSimplePathParams;
    headers: GetEventMatchesSimpleHeaders;
    security: GetEventMatchesSimpleSecurity;
}
export declare class GetEventMatchesSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    matchSimples?: shared.MatchSimple[];
    statusCode: number;
}
