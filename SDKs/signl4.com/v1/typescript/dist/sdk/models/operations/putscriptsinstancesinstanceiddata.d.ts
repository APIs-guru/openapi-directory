import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutScriptsInstancesInstanceIdDataPathParams extends SpeakeasyBase {
    instanceId: string;
}
export declare class PutScriptsInstancesInstanceIdDataRequests extends SpeakeasyBase {
    scriptInstanceCustomUserData?: shared.ScriptInstanceCustomUserData;
    scriptInstanceCustomUserData1?: shared.ScriptInstanceCustomUserData;
    scriptInstanceCustomUserData2?: shared.ScriptInstanceCustomUserData;
    scriptInstanceCustomUserData3?: shared.ScriptInstanceCustomUserData;
}
export declare class PutScriptsInstancesInstanceIdDataRequest extends SpeakeasyBase {
    pathParams: PutScriptsInstancesInstanceIdDataPathParams;
    request?: PutScriptsInstancesInstanceIdDataRequests;
}
export declare class PutScriptsInstancesInstanceIdDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scriptInstanceDetails?: shared.ScriptInstanceDetails;
    statusCode: number;
}
