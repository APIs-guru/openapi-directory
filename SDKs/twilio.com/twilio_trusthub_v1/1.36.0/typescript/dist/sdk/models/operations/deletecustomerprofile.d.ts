import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECUSTOMERPROFILE_SERVERS: string[];
export declare class DeleteCustomerProfilePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteCustomerProfileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCustomerProfileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCustomerProfilePathParams;
    security: DeleteCustomerProfileSecurity;
}
export declare class DeleteCustomerProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
