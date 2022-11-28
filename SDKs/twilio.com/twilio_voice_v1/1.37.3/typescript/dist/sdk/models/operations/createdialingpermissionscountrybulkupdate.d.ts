import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateDialingPermissionsCountryBulkUpdateServerList: readonly ["https://voice.twilio.com"];
export declare class CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest extends SpeakeasyBase {
    updateRequest: string;
}
export declare class CreateDialingPermissionsCountryBulkUpdateSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateDialingPermissionsCountryBulkUpdateRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest;
    security: CreateDialingPermissionsCountryBulkUpdateSecurity;
}
export declare class CreateDialingPermissionsCountryBulkUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate;
}
