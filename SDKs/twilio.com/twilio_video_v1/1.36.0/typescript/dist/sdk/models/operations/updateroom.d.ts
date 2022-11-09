import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEROOM_SERVERS: string[];
export declare class UpdateRoomPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateRoomUpdateRoomRequest extends SpeakeasyBase {
    status: shared.RoomEnumRoomStatusEnum;
}
export declare class UpdateRoomSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateRoomRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateRoomPathParams;
    request?: UpdateRoomUpdateRoomRequest;
    security: UpdateRoomSecurity;
}
export declare class UpdateRoomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1Room?: shared.VideoV1Room;
}
