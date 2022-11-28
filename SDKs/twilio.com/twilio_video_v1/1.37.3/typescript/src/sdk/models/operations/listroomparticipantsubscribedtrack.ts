import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListRoomParticipantSubscribedTrackServerList = [
	"https://video.twilio.com",
] as const;


export class ListRoomParticipantSubscribedTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class ListRoomParticipantSubscribedTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListRoomParticipantSubscribedTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta extends SpeakeasyBase {
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


export class ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=subscribed_tracks", elemType: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack })
  subscribedTracks?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack[];
}


export class ListRoomParticipantSubscribedTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListRoomParticipantSubscribedTrackPathParams;

  @SpeakeasyMetadata()
  queryParams: ListRoomParticipantSubscribedTrackQueryParams;

  @SpeakeasyMetadata()
  security: ListRoomParticipantSubscribedTrackSecurity;
}


export class ListRoomParticipantSubscribedTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listRoomParticipantSubscribedTrackResponse?: ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
