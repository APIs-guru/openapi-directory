import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutScriptsInstancesInstanceIdPathParams extends SpeakeasyBase {
    instanceId: string;
}
export declare class PutScriptsInstancesInstanceIdRequests extends SpeakeasyBase {
    scriptInstanceDetails?: shared.ScriptInstanceDetails;
    scriptInstanceDetails1?: shared.ScriptInstanceDetails;
    scriptInstanceDetails2?: shared.ScriptInstanceDetails;
    scriptInstanceDetails3?: shared.ScriptInstanceDetails;
}
export declare class PutScriptsInstancesInstanceIdRequest extends SpeakeasyBase {
    pathParams: PutScriptsInstancesInstanceIdPathParams;
    request?: PutScriptsInstancesInstanceIdRequests;
}
export declare class PutScriptsInstancesInstanceIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scriptInstanceDetails?: shared.ScriptInstanceDetails;
    statusCode: number;
}
