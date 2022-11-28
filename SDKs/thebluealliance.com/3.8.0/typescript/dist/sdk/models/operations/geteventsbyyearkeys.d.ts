import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsByYearKeysPathParams extends SpeakeasyBase {
    year: number;
}
export declare class GetEventsByYearKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventsByYearKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventsByYearKeysRequest extends SpeakeasyBase {
    pathParams: GetEventsByYearKeysPathParams;
    headers: GetEventsByYearKeysHeaders;
    security: GetEventsByYearKeysSecurity;
}
export declare class GetEventsByYearKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getEventsByYearKeys200ApplicationJsonStrings?: string[];
}
