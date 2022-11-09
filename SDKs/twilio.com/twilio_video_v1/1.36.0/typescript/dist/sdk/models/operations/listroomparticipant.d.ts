import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTROOMPARTICIPANT_SERVERS: string[];
export declare class ListRoomParticipantPathParams extends SpeakeasyBase {
    roomSid: string;
}
export declare class ListRoomParticipantQueryParams extends SpeakeasyBase {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    identity?: string;
    pageSize?: number;
    status?: shared.RoomParticipantEnumStatusEnum;
}
export declare class ListRoomParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRoomParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListRoomParticipantPathParams;
    queryParams: ListRoomParticipantQueryParams;
    security: ListRoomParticipantSecurity;
}
export declare class ListRoomParticipantListRoomParticipantResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRoomParticipantListRoomParticipantResponse extends SpeakeasyBase {
    meta?: ListRoomParticipantListRoomParticipantResponseMeta;
    participants?: shared.VideoV1RoomRoomParticipant[];
}
export declare class ListRoomParticipantResponse extends SpeakeasyBase {
    contentType: string;
    listRoomParticipantResponse?: ListRoomParticipantListRoomParticipantResponse;
    statusCode: number;
}
