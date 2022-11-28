import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMyAccountRequestBody extends SpeakeasyBase {
    currency?: string;
    firstName?: string;
    lastName?: string;
    localeCode?: string;
    shippingRegionCode?: string;
    thirdPartyAdDataConsent?: boolean;
}
export declare class PutMyAccountSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PutMyAccountRequest extends SpeakeasyBase {
    request?: PutMyAccountRequestBody;
    security: PutMyAccountSecurity;
}
export declare class PutMyAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
