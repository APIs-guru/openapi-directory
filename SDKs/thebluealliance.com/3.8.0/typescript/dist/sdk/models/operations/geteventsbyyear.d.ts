import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsByYearPathParams extends SpeakeasyBase {
    year: number;
}
export declare class GetEventsByYearHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventsByYearSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventsByYearRequest extends SpeakeasyBase {
    pathParams: GetEventsByYearPathParams;
    headers: GetEventsByYearHeaders;
    security: GetEventsByYearSecurity;
}
export declare class GetEventsByYearResponse extends SpeakeasyBase {
    contentType: string;
    events?: shared.Event[];
    headers: Map<string, string[]>;
    statusCode: number;
}
