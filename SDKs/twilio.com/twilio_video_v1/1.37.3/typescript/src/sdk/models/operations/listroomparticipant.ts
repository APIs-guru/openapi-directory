import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListRoomParticipantServerList = [
	"https://video.twilio.com",
] as const;


export class ListRoomParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class ListRoomParticipantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.RoomParticipantEnumStatusEnum;
}


export class ListRoomParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRoomParticipantListRoomParticipantResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListRoomParticipantListRoomParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListRoomParticipantListRoomParticipantResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: shared.VideoV1RoomRoomParticipant })
  participants?: shared.VideoV1RoomRoomParticipant[];
}


export class ListRoomParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListRoomParticipantPathParams;

  @SpeakeasyMetadata()
  queryParams: ListRoomParticipantQueryParams;

  @SpeakeasyMetadata()
  security: ListRoomParticipantSecurity;
}


export class ListRoomParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRoomParticipantResponse?: ListRoomParticipantListRoomParticipantResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
