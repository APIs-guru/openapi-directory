import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEMODELBUILD_SERVERS: string[];
export declare class DeleteModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteModelBuildPathParams;
    security: DeleteModelBuildSecurity;
}
export declare class DeleteModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
