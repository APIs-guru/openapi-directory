import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostScriptsInstancesInstanceIdEnablePathParams extends SpeakeasyBase {
    instanceId: string;
}
export declare class PostScriptsInstancesInstanceIdEnableRequest extends SpeakeasyBase {
    pathParams: PostScriptsInstancesInstanceIdEnablePathParams;
}
export declare class PostScriptsInstancesInstanceIdEnableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scriptInstanceDetails?: shared.ScriptInstanceDetails;
    statusCode: number;
}
