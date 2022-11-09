import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEDEFAULTS_SERVERS: string[];
export declare class UpdateDefaultsPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class UpdateDefaultsUpdateDefaultsRequest extends SpeakeasyBase {
    defaults?: any;
}
export declare class UpdateDefaultsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDefaultsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateDefaultsPathParams;
    request?: UpdateDefaultsUpdateDefaultsRequest;
    security: UpdateDefaultsSecurity;
}
export declare class UpdateDefaultsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantDefaults?: shared.AutopilotV1AssistantDefaults;
}
