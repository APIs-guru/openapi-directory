import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsByYearSimplePathParams extends SpeakeasyBase {
    year: number;
}
export declare class GetEventsByYearSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventsByYearSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventsByYearSimpleRequest extends SpeakeasyBase {
    pathParams: GetEventsByYearSimplePathParams;
    headers: GetEventsByYearSimpleHeaders;
    security: GetEventsByYearSimpleSecurity;
}
export declare class GetEventsByYearSimpleResponse extends SpeakeasyBase {
    contentType: string;
    eventSimples?: shared.EventSimple[];
    headers: Map<string, string[]>;
    statusCode: number;
}
