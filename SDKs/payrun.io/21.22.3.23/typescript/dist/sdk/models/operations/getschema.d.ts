import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSchemaPathParams extends SpeakeasyBase {
    dtoDataType: string;
}
export declare class GetSchemaHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetSchemaRequest extends SpeakeasyBase {
    pathParams: GetSchemaPathParams;
    headers: GetSchemaHeaders;
}
export declare class GetSchemaResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    getSchema200ApplicationJsonBinaryString?: Uint8Array;
    statusCode: number;
}
