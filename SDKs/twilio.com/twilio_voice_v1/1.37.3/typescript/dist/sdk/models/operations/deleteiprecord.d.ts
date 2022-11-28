import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteIpRecordServerList: readonly ["https://voice.twilio.com"];
export declare class DeleteIpRecordPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteIpRecordSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteIpRecordRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteIpRecordPathParams;
    security: DeleteIpRecordSecurity;
}
export declare class DeleteIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
