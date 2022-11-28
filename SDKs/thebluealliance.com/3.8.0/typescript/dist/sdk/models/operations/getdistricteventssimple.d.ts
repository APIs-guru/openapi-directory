import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictEventsSimplePathParams extends SpeakeasyBase {
    districtKey: string;
}
export declare class GetDistrictEventsSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetDistrictEventsSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetDistrictEventsSimpleRequest extends SpeakeasyBase {
    pathParams: GetDistrictEventsSimplePathParams;
    headers: GetDistrictEventsSimpleHeaders;
    security: GetDistrictEventsSimpleSecurity;
}
export declare class GetDistrictEventsSimpleResponse extends SpeakeasyBase {
    contentType: string;
    eventSimples?: shared.EventSimple[];
    headers: Map<string, string[]>;
    statusCode: number;
}
