import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEMEMBER_SERVERS: string[];
export declare class DeleteMemberPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteMemberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteMemberPathParams;
    security: DeleteMemberSecurity;
}
export declare class DeleteMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
