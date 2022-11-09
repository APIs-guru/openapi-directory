import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEROOM_SERVERS: string[];
export declare enum CreateRoomCreateRoomRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateRoomCreateRoomRequest extends SpeakeasyBase {
    audioOnly?: boolean;
    emptyRoomTimeout?: number;
    enableTurn?: boolean;
    largeRoom?: boolean;
    maxParticipantDuration?: number;
    maxParticipants?: number;
    mediaRegion?: string;
    recordParticipantsOnConnect?: boolean;
    recordingRules?: any;
    statusCallback?: string;
    statusCallbackMethod?: CreateRoomCreateRoomRequestStatusCallbackMethodEnum;
    type?: shared.RoomEnumRoomTypeEnum;
    uniqueName?: string;
    unusedRoomTimeout?: number;
    videoCodecs?: shared.RoomEnumVideoCodecEnum[];
}
export declare class CreateRoomSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateRoomRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateRoomCreateRoomRequest;
    security: CreateRoomSecurity;
}
export declare class CreateRoomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1Room?: shared.VideoV1Room;
}
