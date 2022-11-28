import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQueryResponseHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetQueryResponseRequest extends SpeakeasyBase {
    headers: GetQueryResponseHeaders;
    request: shared.Query;
}
export declare class GetQueryResponseResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getQueryResponse200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
