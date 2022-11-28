import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchRoomServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchRoomSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchRoomRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchRoomPathParams;
    security: FetchRoomSecurity;
}
export declare class FetchRoomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1Room?: shared.VideoV1Room;
}
