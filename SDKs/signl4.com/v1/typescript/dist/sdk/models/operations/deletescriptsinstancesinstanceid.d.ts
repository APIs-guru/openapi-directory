import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteScriptsInstancesInstanceIdPathParams extends SpeakeasyBase {
    instanceId: string;
}
export declare class DeleteScriptsInstancesInstanceIdRequest extends SpeakeasyBase {
    pathParams: DeleteScriptsInstancesInstanceIdPathParams;
}
export declare class DeleteScriptsInstancesInstanceIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
