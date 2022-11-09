import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHROOMPARTICIPANT_SERVERS: string[];
export declare class FetchRoomParticipantPathParams extends SpeakeasyBase {
    roomSid: string;
    sid: string;
}
export declare class FetchRoomParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRoomParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRoomParticipantPathParams;
    security: FetchRoomParticipantSecurity;
}
export declare class FetchRoomParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1RoomRoomParticipant?: shared.VideoV1RoomRoomParticipant;
}
