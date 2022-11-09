import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEROOMPARTICIPANT_SERVERS: string[];
export declare class UpdateRoomParticipantPathParams extends SpeakeasyBase {
    roomSid: string;
    sid: string;
}
export declare class UpdateRoomParticipantUpdateRoomParticipantRequest extends SpeakeasyBase {
    status?: shared.RoomParticipantEnumStatusEnum;
}
export declare class UpdateRoomParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRoomParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateRoomParticipantPathParams;
    request?: UpdateRoomParticipantUpdateRoomParticipantRequest;
    security: UpdateRoomParticipantSecurity;
}
export declare class UpdateRoomParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomParticipant?: shared.VideoV1RoomRoomParticipant;
}
