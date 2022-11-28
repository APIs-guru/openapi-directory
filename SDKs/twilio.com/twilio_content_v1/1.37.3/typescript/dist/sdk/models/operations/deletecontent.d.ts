import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteContentServerList: readonly ["https://content.twilio.com"];
export declare class DeleteContentPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteContentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteContentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteContentPathParams;
    security: DeleteContentSecurity;
}
export declare class DeleteContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
