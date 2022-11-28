import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventMatchTimeseriesPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventMatchTimeseriesHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventMatchTimeseriesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventMatchTimeseriesRequest extends SpeakeasyBase {
    pathParams: GetEventMatchTimeseriesPathParams;
    headers: GetEventMatchTimeseriesHeaders;
    security: GetEventMatchTimeseriesSecurity;
}
export declare class GetEventMatchTimeseriesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getEventMatchTimeseries200ApplicationJsonStrings?: string[];
}
