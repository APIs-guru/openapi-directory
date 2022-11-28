import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchDialingPermissionsCountryServerList: readonly ["https://voice.twilio.com"];
export declare class FetchDialingPermissionsCountryPathParams extends SpeakeasyBase {
    isoCode: string;
}
export declare class FetchDialingPermissionsCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDialingPermissionsCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDialingPermissionsCountryPathParams;
    security: FetchDialingPermissionsCountrySecurity;
}
export declare class FetchDialingPermissionsCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1DialingPermissionsDialingPermissionsCountryInstance?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance;
}
