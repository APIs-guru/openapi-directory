import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEPHONENUMBER_SERVERS: string[];
export declare class UpdatePhoneNumberPathParams extends SpeakeasyBase {
    phoneNumber: string;
}
export declare class UpdatePhoneNumberUpdatePhoneNumberRequest extends SpeakeasyBase {
    friendlyName?: string;
    voiceRegion?: string;
}
export declare class UpdatePhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdatePhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdatePhoneNumberPathParams;
    request?: UpdatePhoneNumberUpdatePhoneNumberRequest;
    security: UpdatePhoneNumberSecurity;
}
export declare class UpdatePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    routesV2PhoneNumber?: shared.RoutesV2PhoneNumber;
}
