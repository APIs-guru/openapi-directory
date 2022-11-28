import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdatePlayerStreamerServerList: readonly ["https://media.twilio.com"];
export declare class UpdatePlayerStreamerPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdatePlayerStreamerUpdatePlayerStreamerRequest extends SpeakeasyBase {
    status: shared.PlayerStreamerEnumUpdateStatusEnum;
}
export declare class UpdatePlayerStreamerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdatePlayerStreamerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdatePlayerStreamerPathParams;
    request?: UpdatePlayerStreamerUpdatePlayerStreamerRequest;
    security: UpdatePlayerStreamerSecurity;
}
export declare class UpdatePlayerStreamerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
