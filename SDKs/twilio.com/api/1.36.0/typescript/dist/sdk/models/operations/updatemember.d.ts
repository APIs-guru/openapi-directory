import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEMEMBER_SERVERS: string[];
export declare class UpdateMemberPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
    queueSid: string;
}
export declare enum UpdateMemberUpdateMemberRequestMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateMemberUpdateMemberRequest extends SpeakeasyBase {
    method?: UpdateMemberUpdateMemberRequestMethodEnum;
    url: string;
}
export declare class UpdateMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateMemberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateMemberPathParams;
    request?: UpdateMemberUpdateMemberRequest;
    security: UpdateMemberSecurity;
}
export declare class UpdateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountQueueMember?: shared.ApiV2010AccountQueueMember;
}
