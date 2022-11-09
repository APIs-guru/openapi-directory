import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTROOMPARTICIPANT_SERVERS = [
	"https://video.twilio.com",
];



export class ListRoomParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class ListRoomParticipantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.RoomParticipantEnumStatusEnum;
}


export class ListRoomParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRoomParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListRoomParticipantPathParams;

  @Metadata()
  queryParams: ListRoomParticipantQueryParams;

  @Metadata()
  security: ListRoomParticipantSecurity;
}


export class ListRoomParticipantListRoomParticipantResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListRoomParticipantListRoomParticipantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListRoomParticipantListRoomParticipantResponseMeta;

  @Metadata({ data: "json, name=participants", elemType: shared.VideoV1RoomRoomParticipant })
  participants?: shared.VideoV1RoomRoomParticipant[];
}


export class ListRoomParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRoomParticipantResponse?: ListRoomParticipantListRoomParticipantResponse;

  @Metadata()
  statusCode: number;
}
