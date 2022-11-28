import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateMemberServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateMemberPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
}
export declare class CreateMemberHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.MemberEnumWebhookEnabledTypeEnum;
}
export declare class CreateMemberCreateMemberRequest extends SpeakeasyBase {
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    identity: string;
    lastConsumedMessageIndex?: number;
    lastConsumptionTimestamp?: Date;
    roleSid?: string;
}
export declare class CreateMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateMemberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateMemberPathParams;
    headers: CreateMemberHeaders;
    request?: CreateMemberCreateMemberRequest;
    security: CreateMemberSecurity;
}
export declare class CreateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipMessagingV2ServiceChannelMember?: shared.IpMessagingV2ServiceChannelMember;
}
