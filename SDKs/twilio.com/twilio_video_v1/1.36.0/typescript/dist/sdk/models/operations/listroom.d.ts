import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTROOM_SERVERS: string[];
export declare class ListRoomQueryParams extends SpeakeasyBase {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    status?: shared.RoomEnumRoomStatusEnum;
    uniqueName?: string;
}
export declare class ListRoomSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRoomRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListRoomQueryParams;
    security: ListRoomSecurity;
}
export declare class ListRoomListRoomResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRoomListRoomResponse extends SpeakeasyBase {
    meta?: ListRoomListRoomResponseMeta;
    rooms?: shared.VideoV1Room[];
}
export declare class ListRoomResponse extends SpeakeasyBase {
    contentType: string;
    listRoomResponse?: ListRoomListRoomResponse;
    statusCode: number;
}
