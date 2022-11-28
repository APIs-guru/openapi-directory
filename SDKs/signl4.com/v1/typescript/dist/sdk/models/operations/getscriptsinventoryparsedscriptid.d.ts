import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScriptsInventoryParsedScriptIdPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class GetScriptsInventoryParsedScriptIdQueryParams extends SpeakeasyBase {
    language?: string;
}
export declare class GetScriptsInventoryParsedScriptIdRequest extends SpeakeasyBase {
    pathParams: GetScriptsInventoryParsedScriptIdPathParams;
    queryParams: GetScriptsInventoryParsedScriptIdQueryParams;
}
export declare class GetScriptsInventoryParsedScriptIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scriptInstanceDetails?: shared.ScriptInstanceDetails;
    statusCode: number;
}
