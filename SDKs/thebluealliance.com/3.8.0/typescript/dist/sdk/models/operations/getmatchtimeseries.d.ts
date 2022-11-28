import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMatchTimeseriesPathParams extends SpeakeasyBase {
    matchKey: string;
}
export declare class GetMatchTimeseriesHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetMatchTimeseriesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetMatchTimeseriesRequest extends SpeakeasyBase {
    pathParams: GetMatchTimeseriesPathParams;
    headers: GetMatchTimeseriesHeaders;
    security: GetMatchTimeseriesSecurity;
}
export declare class GetMatchTimeseriesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getMatchTimeseries200ApplicationJsonObjects?: Map<string, any>[];
}
