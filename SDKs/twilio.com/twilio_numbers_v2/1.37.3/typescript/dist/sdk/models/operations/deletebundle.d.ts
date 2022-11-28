import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteBundleServerList: readonly ["https://numbers.twilio.com"];
export declare class DeleteBundlePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteBundleSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteBundleRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteBundlePathParams;
    security: DeleteBundleSecurity;
}
export declare class DeleteBundleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
