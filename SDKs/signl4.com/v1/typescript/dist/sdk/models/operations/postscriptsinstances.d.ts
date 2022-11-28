import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostScriptsInstancesRequests extends SpeakeasyBase {
    scriptInstanceDetails?: shared.ScriptInstanceDetails;
    scriptInstanceDetails1?: shared.ScriptInstanceDetails;
    scriptInstanceDetails2?: shared.ScriptInstanceDetails;
    scriptInstanceDetails3?: shared.ScriptInstanceDetails;
}
export declare class PostScriptsInstancesRequest extends SpeakeasyBase {
    request?: PostScriptsInstancesRequests;
}
export declare class PostScriptsInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scriptInstanceDetails?: shared.ScriptInstanceDetails;
    statusCode: number;
}
