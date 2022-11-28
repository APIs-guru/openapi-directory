import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPrepaidSettingsRequests extends SpeakeasyBase {
    prepaidSettingsInfo?: shared.PrepaidSettingsInfo;
    prepaidSettingsInfo1?: shared.PrepaidSettingsInfo;
    prepaidSettingsInfo2?: shared.PrepaidSettingsInfo;
    prepaidSettingsInfo3?: shared.PrepaidSettingsInfo;
}
export declare class PutPrepaidSettingsRequest extends SpeakeasyBase {
    request?: PutPrepaidSettingsRequests;
}
export declare class PutPrepaidSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    prepaidSettingsInfo?: shared.PrepaidSettingsInfo;
    statusCode: number;
}
