import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESAFELIST_SERVERS: string[];
export declare class CreateSafelistCreateSafelistRequest extends SpeakeasyBase {
    phoneNumber: string;
}
export declare class CreateSafelistSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSafelistRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateSafelistCreateSafelistRequest;
    security: CreateSafelistSecurity;
}
export declare class CreateSafelistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2Safelist?: shared.VerifyV2Safelist;
}
