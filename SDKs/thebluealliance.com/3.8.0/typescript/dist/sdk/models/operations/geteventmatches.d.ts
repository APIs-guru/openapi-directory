import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventMatchesPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventMatchesHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventMatchesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventMatchesRequest extends SpeakeasyBase {
    pathParams: GetEventMatchesPathParams;
    headers: GetEventMatchesHeaders;
    security: GetEventMatchesSecurity;
}
export declare class GetEventMatchesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    matches?: shared.Match[];
    statusCode: number;
}
