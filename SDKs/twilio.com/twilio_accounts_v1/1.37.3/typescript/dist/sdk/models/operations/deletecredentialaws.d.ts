import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCredentialAwsServerList: readonly ["https://accounts.twilio.com"];
export declare class DeleteCredentialAwsPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteCredentialAwsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCredentialAwsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCredentialAwsPathParams;
    security: DeleteCredentialAwsSecurity;
}
export declare class DeleteCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
