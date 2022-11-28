import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateWorkerServerList: readonly ["https://taskrouter.twilio.com"];
export declare class CreateWorkerPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class CreateWorkerCreateWorkerRequest extends SpeakeasyBase {
    activitySid?: string;
    attributes?: string;
    friendlyName: string;
}
export declare class CreateWorkerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateWorkerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateWorkerPathParams;
    request?: CreateWorkerCreateWorkerRequest;
    security: CreateWorkerSecurity;
}
export declare class CreateWorkerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorker?: shared.TaskrouterV1WorkspaceWorker;
}
