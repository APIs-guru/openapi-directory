import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchemasHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetSchemasRequest extends SpeakeasyBase {
    headers: GetSchemasHeaders;
}
export declare class GetSchemasResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
