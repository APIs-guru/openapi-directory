import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTROOMPARTICIPANTSUBSCRIBEDTRACK_SERVERS = [
	"https://video.twilio.com",
];



export class ListRoomParticipantSubscribedTrackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class ListRoomParticipantSubscribedTrackQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRoomParticipantSubscribedTrackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRoomParticipantSubscribedTrackRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListRoomParticipantSubscribedTrackPathParams;

  @Metadata()
  queryParams: ListRoomParticipantSubscribedTrackQueryParams;

  @Metadata()
  security: ListRoomParticipantSubscribedTrackSecurity;
}


export class ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta extends SpeakeasyBase {
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


export class ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta;

  @Metadata({ data: "json, name=subscribed_tracks", elemType: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack })
  subscribedTracks?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack[];
}


export class ListRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listRoomParticipantSubscribedTrackResponse?: ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse;

  @Metadata()
  statusCode: number;
}
