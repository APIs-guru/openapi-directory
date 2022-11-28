import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictEventsPathParams extends SpeakeasyBase {
    districtKey: string;
}
export declare class GetDistrictEventsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetDistrictEventsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetDistrictEventsRequest extends SpeakeasyBase {
    pathParams: GetDistrictEventsPathParams;
    headers: GetDistrictEventsHeaders;
    security: GetDistrictEventsSecurity;
}
export declare class GetDistrictEventsResponse extends SpeakeasyBase {
    contentType: string;
    events?: shared.Event[];
    headers: Map<string, string[]>;
    statusCode: number;
}
