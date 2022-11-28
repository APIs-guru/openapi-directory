import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictEventsKeysPathParams extends SpeakeasyBase {
    districtKey: string;
}
export declare class GetDistrictEventsKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetDistrictEventsKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetDistrictEventsKeysRequest extends SpeakeasyBase {
    pathParams: GetDistrictEventsKeysPathParams;
    headers: GetDistrictEventsKeysHeaders;
    security: GetDistrictEventsKeysSecurity;
}
export declare class GetDistrictEventsKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getDistrictEventsKeys200ApplicationJsonStrings?: string[];
}
