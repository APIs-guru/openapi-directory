import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMatchZebraPathParams extends SpeakeasyBase {
    matchKey: string;
}
export declare class GetMatchZebraHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetMatchZebraSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetMatchZebraRequest extends SpeakeasyBase {
    pathParams: GetMatchZebraPathParams;
    headers: GetMatchZebraHeaders;
    security: GetMatchZebraSecurity;
}
export declare class GetMatchZebraResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    zebra?: shared.Zebra;
}
