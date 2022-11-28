import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateRoomParticipantAnonymizeServerList: readonly ["https://video.twilio.com"];
export declare class UpdateRoomParticipantAnonymizePathParams extends SpeakeasyBase {
    roomSid: string;
    sid: string;
}
export declare class UpdateRoomParticipantAnonymizeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRoomParticipantAnonymizeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateRoomParticipantAnonymizePathParams;
    security: UpdateRoomParticipantAnonymizeSecurity;
}
export declare class UpdateRoomParticipantAnonymizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomParticipantRoomParticipantAnonymize?: shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize;
}
