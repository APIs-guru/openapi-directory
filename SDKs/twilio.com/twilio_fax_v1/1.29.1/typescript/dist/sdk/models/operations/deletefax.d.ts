import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteFaxServerList: readonly ["https://fax.twilio.com"];
export declare class DeleteFaxPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteFaxSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteFaxRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteFaxPathParams;
    security: DeleteFaxSecurity;
}
export declare class DeleteFaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
