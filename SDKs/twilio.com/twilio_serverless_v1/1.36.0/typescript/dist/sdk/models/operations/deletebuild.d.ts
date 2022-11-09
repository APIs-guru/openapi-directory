import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEBUILD_SERVERS: string[];
export declare class DeleteBuildPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteBuildPathParams;
    security: DeleteBuildSecurity;
}
export declare class DeleteBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
