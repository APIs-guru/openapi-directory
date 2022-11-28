import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPrepaidSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    prepaidSettingsInfo?: shared.PrepaidSettingsInfo;
    statusCode: number;
}
