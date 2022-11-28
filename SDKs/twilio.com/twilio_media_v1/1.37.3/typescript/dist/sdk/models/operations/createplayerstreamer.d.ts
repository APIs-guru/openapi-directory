import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreatePlayerStreamerServerList: readonly ["https://media.twilio.com"];
export declare enum CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreatePlayerStreamerCreatePlayerStreamerRequest extends SpeakeasyBase {
    maxDuration?: number;
    statusCallback?: string;
    statusCallbackMethod?: CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum;
    video?: boolean;
}
export declare class CreatePlayerStreamerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreatePlayerStreamerRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreatePlayerStreamerCreatePlayerStreamerRequest;
    security: CreatePlayerStreamerSecurity;
}
export declare class CreatePlayerStreamerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
