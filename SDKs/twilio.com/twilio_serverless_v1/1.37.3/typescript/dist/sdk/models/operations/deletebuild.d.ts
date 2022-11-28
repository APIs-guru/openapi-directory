import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteBuildServerList: readonly ["https://serverless.twilio.com"];
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
