import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTROOMPARTICIPANTPUBLISHEDTRACK_SERVERS = [
	"https://video.twilio.com",
];



export class ListRoomParticipantPublishedTrackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class ListRoomParticipantPublishedTrackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRoomParticipantPublishedTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRoomParticipantPublishedTrackRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListRoomParticipantPublishedTrackPathParams;

  @Metadata()
  queryParams: ListRoomParticipantPublishedTrackQueryParams;

  @Metadata()
  security: ListRoomParticipantPublishedTrackSecurity;
}


export class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta extends SpeakeasyBase {
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


export class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta;

  @Metadata({ data: "json, name=published_tracks", elemType: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack })
  publishedTracks?: shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack[];
}


export class ListRoomParticipantPublishedTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRoomParticipantPublishedTrackResponse?: ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse;

  @Metadata()
  statusCode: number;
}
