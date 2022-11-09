import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTROOMRECORDING_SERVERS = [
	"https://video.twilio.com",
];



export class ListRoomRecordingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class ListRoomRecordingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceSid" })
  sourceSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.RoomRecordingEnumStatusEnum;
}


export class ListRoomRecordingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRoomRecordingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListRoomRecordingPathParams;

  @Metadata()
  queryParams: ListRoomRecordingQueryParams;

  @Metadata()
  security: ListRoomRecordingSecurity;
}


export class ListRoomRecordingListRoomRecordingResponseMeta extends SpeakeasyBase {
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


export class ListRoomRecordingListRoomRecordingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListRoomRecordingListRoomRecordingResponseMeta;

  @Metadata({ data: "json, name=recordings", elemType: shared.VideoV1RoomRoomRecording })
  recordings?: shared.VideoV1RoomRoomRecording[];
}


export class ListRoomRecordingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRoomRecordingResponse?: ListRoomRecordingListRoomRecordingResponse;

  @Metadata()
  statusCode: number;
}
