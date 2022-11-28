import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostScriptsInstancesInstanceIdDisablePathParams extends SpeakeasyBase {
    instanceId: string;
}
export declare class PostScriptsInstancesInstanceIdDisableRequest extends SpeakeasyBase {
    pathParams: PostScriptsInstancesInstanceIdDisablePathParams;
}
export declare class PostScriptsInstancesInstanceIdDisableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scriptInstanceDetails?: shared.ScriptInstanceDetails;
    statusCode: number;
}
