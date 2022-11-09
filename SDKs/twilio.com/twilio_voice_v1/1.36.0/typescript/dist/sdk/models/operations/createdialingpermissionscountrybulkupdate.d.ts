import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEDIALINGPERMISSIONSCOUNTRYBULKUPDATE_SERVERS: string[];
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
