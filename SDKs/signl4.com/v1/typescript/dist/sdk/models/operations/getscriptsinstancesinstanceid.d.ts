import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScriptsInstancesInstanceIdPathParams extends SpeakeasyBase {
    instanceId: string;
}
export declare class GetScriptsInstancesInstanceIdRequest extends SpeakeasyBase {
    pathParams: GetScriptsInstancesInstanceIdPathParams;
}
export declare class GetScriptsInstancesInstanceIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scriptInstanceDetails?: shared.ScriptInstanceDetails;
    statusCode: number;
}
